const router = require("express").Router();
const { User } = require("../../db");

router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.get("/verified", async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
