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