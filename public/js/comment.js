let commentInput = $("#commentInput");
let submitComment = $("#submitButton");

submitComment.on("click", async function (event) {
	event.preventDefault();
	const comment_content = commentInput.val();

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
			}),
		});
		const newComment = await response.json();
		// window.location.href = "/home";
	} catch (error) {
		console.error(error);
	}
});
