const router = require("express").Router();
// const apiController = require("./apiController");
const sequelize = require("../config/connection");
const { Comment, Post, User } = require("../models");

router.get("/", (req, res) => {
	Post.findAll({
		attributes: ["id", "title", "content", "createdAt"],
		include: [
			{
				model: Comment,
				attributes: [
					"id",
					"comment_content",
					"user_id",
					"post_id",
					"createdAt",
				],
				include: {
					model: User,
					attributes: ["username"],
				},
			},
			{
				model: User,
				attributes: ["username"],
			},
		],
	}).then((postData) => {
		const posts = postData.map((post) =>
			post.get({
				plain: true,
			})
		);

		res.render("landingPage", {
			posts,
			isLoggedIn: req.session.user,
		});
	});
});
// router.use("/api", apiController);

module.exports = router;
