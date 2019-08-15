const router = require("express").Router();


const MakersController = require("../controllers/makersController");

router.post("/", MakersController.create);

module.exports = router;
