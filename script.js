document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form reload

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  // Demo credentials
  const validUser = "dhanush80888";
  const validPass = "12345";

  if (username === validUser && password === validPass) {
    message.style.color = "green";
    message.textContent = "✅ Login successful!";
    // Example of redirect
    setTimeout(() => {
      window.location.href = "welcome.html";
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "❌ Invalid username or password!";
  }
});
