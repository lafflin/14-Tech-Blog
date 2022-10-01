const sequelize = require("./../config/connection");
const { User, Comment, Post } = require("./../models");
const comments = require("./comment");
const posts = require("./post");
const users = require("./users");

const seeder = async () => {
	// wipes out the user table
	await sequelize.sync({ force: true });
	const createUser = await User.bulkCreate(users, {
		individualHooks: true,
	});
	const createPosts = await Post.bulkCreate(posts);
	const createComments = await Comment.bulkCreate(comments);
	process.exit(0);
};

(async () => {
	await seeder();
})();
