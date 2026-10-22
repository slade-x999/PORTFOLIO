const items = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("visible", entry.isIntersecting);
  });
}, { threshold: 0.2 });

items.forEach((el) => observer.observe(el));

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("topnav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    console.log("clicked");
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
}




const phrases = ["I'M DEE"];
const el = document.getElementById("typed");
let p = 0, i = 0, deleting = false;

function tick() {
  const text = phrases[p];
  el.textContent = text.slice(0, i);

  let delay = deleting ? 80 : 120;

  if (!deleting && i === text.length) {
    delay = 1800;            // pause when fully typed
    deleting = false;
  } else if (deleting && i === 0) {
    deleting = false;
    p = (p + 1) % phrases.length;
    delay = 400;             // pause before next phrase
  }

  i += deleting ? -1 : 1;
  setTimeout(tick, delay);
}

tick();

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none"; 
}