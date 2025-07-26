function showContact() {
  document.getElementById("phone-number").style.display = "block";
}

function showPortfolio() {
  const portfolio = document.getElementById("portfolio-section");
  // Toggle visibility
  if (portfolio.classList.contains("hidden")) {
    portfolio.classList.remove("hidden");
  } else {
    portfolio.classList.add("hidden");
  }
}

// Typing effect (same)
const typingText = document.getElementById("typing-text");
const originalText = typingText.innerText;
typingText.innerText = "";
let i = 0;

function typeEffect() {
  if (i < originalText.length) {
    typingText.innerText += originalText.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}

window.onload = typeEffect;
