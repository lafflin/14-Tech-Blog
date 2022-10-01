let commentInput = $("#commentInput");
let submitComment = $("#submitButton");
let commentForm = $("#commentForm");
let postId = $("#postId");
let addComment = $("#addComment");
let editButton = $("#editButton");
let deleteButton = $("#deleteButton");
let updateForm = $("#updateForm");
let updateContent = $("#updateContent");
let submitEditButton = $("#submitEditButton");

postId.hide();
commentForm.hide();
updateForm.hide();

addComment.on("click", function () {
	commentForm.show();
});

submitComment.on("click", async function (event) {
	event.preventDefault();

	const comment_content = commentInput.val();
	const post_id = postId.text();
	console.log(post_id);

	if (comment_content.trim().length === 0) {
		alert("Please enter something into the comment box");
	}
	try {
		const response = await fetch("/api/submitComment", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				comment_content,
				post_id,
			}),
		});
		const newComment = await response.json();
		window.location.href = "/home";
	} catch (error) {
		console.error(error);
	}
});

editButton.on("click", function () {
	updateForm.show();
});

submitEditButton.on("click", async function (event) {
	event.preventDefault();
	const content = updateContent.val();
	const post_id = postId.text();
	console.log(content);
	if (content.trim().length === 0) {
		alert("Please enter something into the content box");
	}

	try {
		const response = await fetch("/api/updatePost", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				content,
				post_id,
			}),
		});
		const deletedPost = await response.json();
		// window.location.href = "/dash";
	} catch (error) {
		console.error(error);
	}
});

deleteButton.on("click", async function () {
	const post_id = postId.text();

	if (confirm("Are you sure you would like to delete this post?")) {
		try {
			const response = await fetch("/api/deletePost", {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					post_id,
				}),
			});
			const deletedPost = await response.json();
			window.location.href = "/dash";
		} catch (error) {
			console.error(error);
		}
	} else {
		console.log("User decided not to delete post");
	}
});
