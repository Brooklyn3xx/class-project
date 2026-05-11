function checkEmail() {

  const email =
  document.getElementById("emailInput").value.toLowerCase();

  const result =
  document.getElementById("emailResult");

  const warningWords = [
    "urgent",
    "password",
    "verify",
    "click here",
    "account locked",
    "login"
  ];

  let suspicious =
  warningWords.some(word => email.includes(word));

  if (email.trim() === "") {

    result.textContent =
    "Please paste an email first.";

    result.className = "warning";

  } else if (suspicious) {

    result.textContent =
    "Warning: This email may be suspicious.";

    result.className = "warning";

  } else {

    result.textContent =
    "No major phishing signs were found.";

    result.className = "safe";
  }
}

function checkLink() {

  const link =
  document.getElementById("linkInput").value.toLowerCase();

  const result =
  document.getElementById("linkResult");

  if (link.trim() === "") {

    result.textContent =
    "Please paste a link first.";

    result.className = "warning";

  } else if (!link.startsWith("https://")) {

    result.textContent =
    "Warning: This link may not be secure.";

    result.className = "warning";

  } else {

    result.textContent =
    "This link uses HTTPS, but still be careful.";

    result.className = "safe";
  }
}
function runAIDetection() {
  const email = document.getElementById("emailInput").value.toLowerCase();
  const result = document.getElementById("aiResult");

  let score = 20;

  if (email.includes("urgent")) score += 20;
  if (email.includes("password")) score += 20;
  if (email.includes("verify")) score += 15;
  if (email.includes("click")) score += 15;
  if (email.includes("account locked")) score += 20;

  if (email.trim() === "") {
    result.textContent = "Please paste an email first before running AI detection.";
    result.className = "warning";
  } else if (score >= 60) {
    result.textContent = "AI Risk Score: " + score + "% — High phishing risk detected.";
    result.className = "warning";
  } else {
    result.textContent = "AI Risk Score: " + score + "% — Low phishing risk detected.";
    result.className = "safe";
  }
}

function checkExtension() {
  document.getElementById("extensionResult").textContent =
    "Browser Extension Status: Demo mode active. PhishGuard would warn users before visiting unsafe links.";
}

function scanInbox() {
  document.getElementById("scanResult").textContent =
    "Inbox Scan Complete: 3 emails scanned. 1 suspicious email found.";
}

function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const result = document.getElementById("loginResult");

  if (username === "" || password === "") {
    result.textContent = "Please enter both a username and password.";
    result.className = "warning";
  } else {
    result.textContent = "Login successful. Welcome, " + username + "!";
    result.className = "safe";
  }
}

function runAPICheck() {
  document.getElementById("apiResult").textContent =
    "Security API Result: Simulated scan complete. No known malware found, but caution is still recommended.";
}

function encryptReport() {
  document.getElementById("encryptResult").textContent =
    "Encrypted Report: U2FsdGVkX19QaGlzaEd1YXJkX1JlcG9ydA==";
}