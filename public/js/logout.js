let logoutButton = $("#logoutButton");

logoutButton.on("click", async function (event) {
	event.preventDefault();
	try {
		await fetch("/api/logout", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		});
		window.location.href = "/";
	} catch (error) {
		console.error(error);
	}
});
