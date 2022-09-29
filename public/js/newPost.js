let postTitle = $("#title");
let postContent = $("#content");
let submit = $("#submit");

submit.on("click", async function (event) {
	event.preventDefault();

	const title = postTitle.val();
	const content = postContent.val();

	console.log(postTitle, postContent);
	if (title.trim().length < 1) {
		alert("enter a valid title");
		return;
	}

	try {
		const response = await fetch("api/newPost", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				title,
				content,
			}),
		});
		const newPost = await response.json();
		window.location.href = "/dash";
	} catch (error) {
		console.error(error);
	}
});
