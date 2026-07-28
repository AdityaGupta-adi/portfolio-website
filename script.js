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

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach((el)=>{
    observer.observe(el);
});
const themeBtn = document.getElementById("theme-toggle");

themeBtn.onclick = () => {
document.body.classList.toggle("light-mode");

themeBtn.textContent =
document.body.classList.contains("light-mode")
? "🌞"
: "🌙";
};
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.querySelector("nav ul");

menuBtn.onclick = () => {
navMenu.classList.toggle("active");
};
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
    if(document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
};

topBtn.onclick = () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};
