const validateData = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      // console.log(value);
      res.status(400).json({ error: error.details[0].message });
    } else {
      next();
    }
  };
};

module.exports = validateData;
