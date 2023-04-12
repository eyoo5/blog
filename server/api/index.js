const router = require("express").Router();

router.use("/users", require("./user"));
router.use("/posts", require("./posts"));

router.use((req, res, next) => {
  const err = new Error("API route not found");
  err.status = 404;
  next(err);
});

module.exports = router;
