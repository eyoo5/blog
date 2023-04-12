const posts = require("express").Router();

const { Post, User } = require("../../db");

posts.get("/userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    if (user) {
      const options = {};
      //  Trying pagination:
      if (Objects.keys(req.query).length) {
        const { limit } = req.query;
        options.limit = limit;
      }
      const data = await Post.findAll(
        {
          where: { id: userId },
        },
        limit
      );
      res.status(200).json(data);
    } else {
      console.log(new Error("Trouble fetching all posts"));
    }
  } catch (error) {
    next(error);
  }
});

posts.post("/:userId/new", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    if (user) {
      const { title, description } = req.body;
      const data = await Post.create({
        title: title,
        decription: description,
        UserId: userId,
      });
      res.status(201).json(data);
    }
  } catch (error) {
    next(error);
  }
});

posts.put(":id/update", async (req, res, next) => {
  try {
    const { postId } = req.params;
    const post = await Post.findByPk(postId);
    if (post) {
      const { title, description } = req.body;
      const data = post.update({
        title: title,
        description: description,
      });
      res.status(202).json(data);
    } else {
      console.log(new Error("Blog post not found"));
    }
  } catch (error) {
    next(error);
  }
});

posts.delete(":id/delete", async (req, res, next) => {
  try {
    const { postId } = req.params;
    const post = await Post.findByPk(postId);
    if (post) {
      const data = await post.destroy();
      res.send(data).status(200);
    } else {
      console.log(new Error("Post not found"));
    }
  } catch (error) {
    next(error);
  }
});
