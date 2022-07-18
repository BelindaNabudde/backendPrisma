const JWT = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (authHeader) {
    if (authHeader.startsWith("Bearer")) {
      const token = authHeader.split(" ")[1];
      JWT.verify(token, "belinda12", (err, decoded) => {
        if (err) {
          res.status(400).json("Token is invalid");
        } else {
          next();
        }
      });
    } else {
      res.status(400).json("Authorization header is malformed");
    }
  } else {
    res.status(400).json("Authorization header is not provided");
  }
};
// export
module.exports = authenticate;
