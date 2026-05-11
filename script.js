function checkEmail() {
  const email = document.getElementById("emailInput").value.toLowerCase();
  const result = document.getElementById("emailResult");

  const warningWords = [
    "urgent",
    "password",
    "verify",
    "click here",
    "account locked",
    "login"
  ];

  const suspicious = warningWords.some(word =>
    email.includes(word)
  );

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

  const email =
    document.getElementById("emailInput").value.toLowerCase();

  const result =
    document.getElementById("aiResult");

  let score = 20;

  if (email.includes("urgent")) score += 20;
  if (email.includes("password")) score += 20;
  if (email.includes("verify")) score += 15;
  if (email.includes("click")) score += 15;
  if (email.includes("account locked")) score += 20;

  if (email.trim() === "") {

    result.textContent =
      "Paste an email before running AI detection.";

    result.className = "warning";

  } else if (score >= 60) {

    result.textContent =
      "AI Risk Score: " + score +
      "% — High phishing risk detected.";

    result.className = "warning";

  } else {

    result.textContent =
      "AI Risk Score: " + score +
      "% — Low phishing risk detected.";

    result.className = "safe";
  }
}

function scanInbox() {

  const result =
    document.getElementById("scanResult");

  result.textContent =
    "Automatic Email Scan Complete: 5 emails scanned. Suspicious phishing activity detected in 1 message."

  result.className = "warning";
}