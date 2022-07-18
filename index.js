const express = require("express");
const app = express();


// Middleware
app.use(express.json());


// routes
const quoteRouter = require("./routers/quoteRouters");
const authorRouter = require("./routers/authorRouters");
const userRouter = require("./routers/userRouter");


// Request Handlers
app.use("/api/v1/quotes", quoteRouter);
app.use("/api/v1/authors", authorRouter);
app.use("/api/v1/users", userRouter);

// listening port

let PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
