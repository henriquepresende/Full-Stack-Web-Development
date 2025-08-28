// ===== DARK MODE TOGGLE =====
const toggleBtn = document.getElementById("darkModeToggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== REVEAL AO ROLAR =====
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("active");
  });
}, { threshold: 0.2 });
reveals.forEach(r => observer.observe(r));

// ===== TYPING EFFECT =====
const typingEl = document.querySelector(".typing");
const text = "Henrique";
let idx = 0;
function typing() {
  if (idx < text.length) {
    typingEl.textContent += text.charAt(idx);
    idx++;
    setTimeout(typing, 150);
  }
}
typing();

// ===== BOTÃO VOLTAR AO TOPO =====
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});