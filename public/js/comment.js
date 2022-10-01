let commentInput = $("#commentInput");
let submitComment = $("#submitButton");
let commentForm = $("#commentForm");
let postId = $("#postId");
let addComment = $("#addComment");
let OPId = $("#OPId");
let editButton = $("#editButton");
let deleteButton = $("#deleteButton");

postId.hide();
OPId.hide();
commentForm.hide();
// editButton.hide();
// deleteButton.hide();

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
// function editAndDelete() {
// 	if (session.user.id === postId.text()) {
// 		editButton.show();
// 		deleteButton.show();
// 	}
// }
// editAndDelete();

editButton.on("click", function () {
	// console.log(req.session.user.id);
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
