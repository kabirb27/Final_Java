const Maker = require("../models/maker");
const jwt = require("jsonwebtoken");

exports.authenticate = (req, res) => {
  Maker.findOne({
    email: req.body.email
  })
    .then(maker => {
      maker.authenticate(req.body.password, (err, isMatch) => {
        if (err) throw new Error(err);

        if (isMatch) {
          req.session.userId = author.id;

          const token = jwt.sign({ payload: req.body.email }, "moviemaker", {
            expiresIn: "1h"
          });
          res.cookie("token", token, { httpOnly: true });
        } else {
          res.status(401).json(err);
        }
      });
    })
    .catch(err => {
      res.status(401).json(err);
    });
};

exports.logout = (req, res) => {
  req.isAuthenticated();

  req.session.userId = null;
  req.flash("successfull", "You are logged out!");
  res.redirect("/");
};
