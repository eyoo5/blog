const { User, Post } = require("./db");
const { db } = require("./db");

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  const user = await Promise.all([
    User.create({
      firstName: "Esther",
      lastName: "Yoo",
      password: "blogPass5!",
      username: "eyoo",
      email: "liletchie@gmail.com",
      description: "",
    }),
  ]);

  const post = await Promise.all([
    Post.create({
      title: "Seed Post 1",
      content: "For building purposes.",
      UserId: 1,
    }),
    Post.create({
      title: "Seed Post 2",
      content: "For building purposes.",
      UserId: 1,
    }),
    Post.create({
      title: "Seed Post 3",
      content: "For building purposes.",
      UserId: 1,
    }),
  ]);
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
