const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const { register, getUser } = require("../db/dbOperations");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", router);

router.use((req, res, next) => {
  next();
});
router.route("/").get((req, res) => {
  res.send("server is up and running cannot Get");
});

router.route("/register").post(async (req, res) => {
  try {
    console.log(req.body);
    const result = await register(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.route("/register").get(async (req, res) => {
  try {
    const result = await getUser();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

module.exports = router;
