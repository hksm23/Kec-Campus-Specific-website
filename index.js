
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

togglePassword.addEventListener("click", function () {
  const isPassword = password.type === "password";

  password.type = isPassword ? "text" : "password";
  togglePassword.textContent = isPassword ? "Hide" : "Show";
});

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!loginForm.checkValidity()) {
    loginForm.reportValidity();
    return;
  }

  message.textContent =
    "Login form validated. Connect a backend to authenticate your account.";
});

document.getElementById("forgotPassword").addEventListener("click", function (event) {
  event.preventDefault();
  message.textContent =
    "Password recovery requires a configured authentication service.";
});

document.getElementById("googleLogin").addEventListener("click", function () {
  message.textContent =
    "Google login is not configured yet. OAuth setup is required.";
});
