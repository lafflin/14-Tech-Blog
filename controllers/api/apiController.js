const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { User, Post, Comment } = require("../../models");

router.post("/signup", async (req, res) => {
	try {
		const newUser = await User.create(req.body);

		req.session.save(() => {
			req.session.user = newUser;
			req.session.isLoggedIn = true;
			res.json(newUser);
		});
	} catch (error) {
		res.status(500).json({ error });
	}
});

router.post("/signin", async (req, res) => {
	try {
		const user = await User.findOne({
			where: {
				username: req.body.username,
			},
		});
		if (!user) {
			return res.status(401).json({ error: "Invalid Username" });
		}
		const passwordMatch = await bcrypt.compare(
			req.body.password,
			user.password
		);

		if (!passwordMatch) {
			return res.status(401).json({ error: "Invalid Password" });
		} else {
			req.session.save(() => {
				req.session.user = user;
				req.session.isLoggedIn = true;
				res.json({ success: true });
			});
		}
	} catch (error) {
		res.status(500).json({ error });
	}
});

router.post("/logout", async (req, res) => {
	if (req.session.isLoggedIn) {
		console.log("logging out");
		req.session.destroy();
		console.log("logged out!");
	}
});

router.post("/newPost", async (req, res) => {
	try {
		const newPost = await Post.create({
			title: req.body.title,
			content: req.body.content,
			user_id: req.session.user.id,
		});
		console.log(newPost);
		res.json(newPost);
	} catch (error) {
		res.status(500).json({ error });
	}
});

router.post("/submitComment", async (req, res) => {
	try {
		console.log(req.body);
		const newComment = await Comment.create({
			comment_content: req.body.comment_content,
			user_id: req.session.user.id,
			post_id: req.body.post_id,
		});
		console.log(newComment);
		res.json(newComment);
	} catch (error) {
		res.status(500).json({ error });
	}
});

router.put("/updatePost", async (req, res) => {});
router.delete("/deletePost", async (req, res) => {
	try {
		console.log(req.body);
		const deletePost = await Post.destroy({
			where: { id: req.body.post_id },
		});
		console.log(deletePost);
		console.log(deletePost);
		res.json(deletePost);
	} catch (error) {
		res.status(500).json({ error });
	}
});
module.exports = router;
