const passwordSchema = require("../models/password");

module.exports = (req, res, next) => {
  if (!passwordSchema.validate(req.body.password)) {
    res.status(400).json({
      message:
        "Le Mot de passe doit faire entre 10 et 64 caractères, avec une majuscule, une minuscule et un chiffre au moins, et ne doit pas contenir d'espace",
    });
  } else {
    next();
  }
};
