const router = require("express").Router();
const apiController = require("./apiController");
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
		console.log(req.session.user);
		res.render("landingPage", {
			posts,
			isLoggedIn: req.session.user,
		});
	});
});

router.get("/home", (req, res) => {
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
		console.log(req.session.user);
		res.render("home", {
			posts,
			isLoggedIn: req.session.user,
		});
	});
});

router.get("/post/:id", (req, res) => {});

router.get("/newPost", (req, res) => {
	res.render("newPost");
});

router.get("/dash", (req, res) => {
	Post.findAll({
		where: {
			user_id: req.session.id,
		},
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
	})
		.then((postData) => {
			const posts = postData.map((post) =>
				post.get({
					plain: true,
				})
			);
			res.render("dash", {
				posts,
				isLoggedIn: req.session.user,
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.use("/api", apiController);

module.exports = router;
