document.getElementById("loginForm").addEventListener("submit", function (e) {
e.preventDefault();

const email = document.getElementById("email").value.trim().toLowerCase();
const password = document.getElementById("password").value;

if (email === "" || password === "") {
alert("Please fill in all fields");
return;
}

const users = JSON.parse(localStorage.getItem("users")) || [];
const matchedUser = users.find(function (user) {
return user.email === email && user.password === password;
});

if (!matchedUser) {
alert("Invalid email or password");
return;
}

localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
window.location.href = "dashboard.html";
});

const passwordInput = document.getElementById("password");

passwordInput.addEventListener("dblclick", function () {
if (passwordInput.type === "password") {
passwordInput.type = "text";
} else {
passwordInput.type = "password";
}
});
