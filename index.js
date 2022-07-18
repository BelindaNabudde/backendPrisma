const express = require("express");
const app = express();
// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

const PORT = 5000;

// Middleware
app.use(express.json());

// routes
const quoteRouter = require("./routers/quoteRouters");
const authorRouter = require("./routers/authorRouters");
const userRouter = require("./routers/userRouter");

// Request Handlers
app.use("/quotes", quoteRouter);
app.use("/authors", authorRouter);
app.use("/users", userRouter);

// listening port
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
