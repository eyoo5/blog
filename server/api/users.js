const user = require("express").Router();

const User = require("../../db");

user.get("/:id", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const data = await User.findByPK(userId);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});
