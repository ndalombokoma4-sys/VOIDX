document.getElementById("registerForm").addEventListener("submit", function (e) {
e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim().toLowerCase();
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;

if (password !== confirmPassword) {
alert("Passwords do not match");
return;
}

if (password.length < 6) {
alert("Password must be at least 6 characters");
return;
}

const users = JSON.parse(localStorage.getItem("users")) || [];
const existingUser = users.find(function (user) {
return user.email === email;
});

if (existingUser) {
alert("An account with this email already exists");
return;
}

users.push({
name: name,
email: email,
password: password
});

localStorage.setItem("users", JSON.stringify(users));
localStorage.setItem(
"loggedInUser",
JSON.stringify({
name: name,
email: email
})
);
window.location.href = "dashboard.html";
});
