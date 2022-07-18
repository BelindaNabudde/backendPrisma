const { PrismaClient } = require("@prisma/client");
const JWT = require("jsonwebtoken");
const prisma = new PrismaClient();

const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await prisma.user.create({
      data: { username, password }
    });
    // token creation
    const token = JWT.sign(
      {
        username: req.body.username,
        userId: newUser.id
      },
      "belinda12"
    );
    res.status(200).json({ newUser, token });
    // res.status(200).json({ message: "Quote has been added", quote });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  getAllUsers,
  createUser
};
