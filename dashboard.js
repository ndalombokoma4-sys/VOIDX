const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

if (!loggedInUser) {
window.location.href = "index.html";
}

const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const welcomeMessage = document.getElementById("welcomeMessage");
const welcomeText = document.getElementById("welcomeText");
const logoutButton = document.getElementById("logoutButton");

profileName.textContent = loggedInUser.name || "User";
profileEmail.textContent = loggedInUser.email || "No email available";
welcomeMessage.textContent = "Welcome, " + (loggedInUser.name || "User");
welcomeText.textContent = "You have successfully signed in to your clean Ndalo page.";

logoutButton.addEventListener("click", function () {
localStorage.removeItem("loggedInUser");
window.location.href = "index.html";
});
