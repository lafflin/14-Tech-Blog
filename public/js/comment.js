let commentInput = $("#commentInput");
let submitComment = $("#submitButton");
let commentForm = $("#commentForm");
let postId = $("#postId");
let addComment = $("#addComment");

postId.hide();
commentForm.hide();

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
		// window.location.href = "/home";
	} catch (error) {
		console.error(error);
	}
});
