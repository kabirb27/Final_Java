const Maker = require("../models/maker");

exports.create = (req, res) => {
  Author.create(req.body.author)
    .then(() =>
      res.status(201).send({ success: "Movie Maker was created successfully" })
    )
    .catch(err => res.status(400).send(err));
};
