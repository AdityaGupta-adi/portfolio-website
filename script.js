const text = [
  "Software Engineer",
  "Full Stack Developer",
  "AI & ML Enthusiast"
];

let index = 0;
let char = 0;
let current = "";
let isDeleting = false;

function type() {
  current = text[index];

  if (!isDeleting) {
    char++;
  } else {
    char--;
  }

  document.getElementById("typing").textContent =
    current.substring(0, char);

  if (!isDeleting && char === current.length) {
    isDeleting = true;
    setTimeout(type, 1500);
    return;
  }

  if (isDeleting && char === 0) {
    isDeleting = false;
    index = (index + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 60 : 120);
}

type();
