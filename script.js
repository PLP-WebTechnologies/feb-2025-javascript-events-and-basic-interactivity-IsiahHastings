// Button click to change text
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("textChange").textContent = "🎉 You clicked the button!";
});

// Hover effect
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", function() {
  hoverBox.style.backgroundColor = "lightgreen";
});
hoverBox.addEventListener("mouseout", function() {
  hoverBox.style.backgroundColor = "lightblue";
});

// Keypress detection
document.getElementById("keyInput").addEventListener("keyup", function(e) {
  document.getElementById("keyPressed").textContent = "You pressed: " + e.key;
});

// Double click secret action
document.getElementById("secretBtn").addEventListener("dblclick", function() {
  document.getElementById("secretMessage").textContent = "🎊 Secret unlocked!";
});

// Image gallery
let images = ["YOGA.jpg", "TREE.jpeg"];
let currentIndex = 0;

function showImage(index) {
  document.getElementById("galleryImage").src = images[index];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

// Tabs
function showTab(tabId) {
  document.getElementById("tab1").style.display = "none";
  document.getElementById("tab2").style.display = "none";
  document.getElementById(tabId).style.display = "block";
}

// Form validation
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    document.getElementById("formMessage").textContent = "All fields are required!";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    document.getElementById("formMessage").textContent = "Invalid email format!";
    return;
  }

  if (password.length < 8) {
    document.getElementById("formMessage").textContent = "Password must be at least 8 characters.";
    return;
  }

  document.getElementById("formMessage").textContent = "Form submitted successfully!";
});

// Password live feedback
document.getElementById("password").addEventListener("input", function() {
  const pwd = this.value;
  const feedback = document.getElementById("passwordFeedback");

  if (pwd.length < 8) {
    feedback.textContent = "Too short!";
  } else {
    feedback.textContent = "✅ Looks good!";
  }
});
