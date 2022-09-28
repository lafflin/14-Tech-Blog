const sequelize = require("./../config/connection");
const { User, Comment, Post } = require("./../models");
const comments = require("./comment");
const posts = require("./post");
const users = require("./users");

const seeder = async () => {
	// wipes out the user table
	await sequelize.sync({ force: true });
	const createComments = await Comment.bulkCreate(comments);
	const createPosts = await Post.bulkCreate(posts);
	const createUser = await User.bulkCreate(users, {
		individualHooks: true,
	});
	process.exit(0);
};

seeder();
