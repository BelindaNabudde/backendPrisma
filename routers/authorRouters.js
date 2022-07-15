const express = require("express");
const router = express.Router();

const authorSchema = require("../helpers/joi-schema");
const validateData = require("../helpers/validation");

const {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  updateAuthor,
  deleteAuthor
} = require("../controllers/authorController");

router.get("/", getAllAuthors);

router.post("/", validateData(authorSchema), createAuthor);

router.get("/:id", getAuthorById);

router.patch("/:id", updateAuthor);

router.delete("/:id", deleteAuthor);

module.exports = router;
