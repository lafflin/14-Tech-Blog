let userNameInput = $("#userNameInput");
let passwordInput = $("#passwordInput");
let loginButton = $("#loginButton");

loginButton.on("click", async function (event) {
	event.preventDefault();

	const username = userNameInput.val();
	const password = passwordInput.val();

	if (username.trim().length < 8) {
		alert("Please enter a valid username (8 characters minimum)");
		return;
	}
	if (password.trim().length < 8) {
		alert("Please enter a valid password (8 characters minimum)");
		return;
	}

	try {
		const response = await fetch("api/signin", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username,
				password,
			}),
		});
		const user = await response.json();
		window.location.href = "/home";
	} catch (error) {
		console.error(error);
	}
});
