const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { User, Post } = require("../models");

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
		console.log(req.body);
		const newPost = await Post.create(req.body);
		res.json(newPost);
	} catch (error) {
		res.status(500).json({ error });
	}
});

module.exports = router;
