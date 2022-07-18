const express = require("express");
const router = express.Router();

const { authorSchema } = require("../helpers/joi-schema");
const validateData = require("../helpers/validation");

const {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  updateAuthor,
  deleteAuthor
} = require("../controllers/authorController");

const authenticate = require("../helpers/authenticate");

router.get("/", getAllAuthors);

router.post("/", [authenticate,validateData(authorSchema)], createAuthor);

router.get("/:id", getAuthorById);

router.patch("/:id", updateAuthor);

router.delete("/:id", deleteAuthor);

module.exports = router;
