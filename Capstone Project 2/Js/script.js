// ===== DARK MODE TOGGLE =====
const toggleBtn = document.getElementById("darkModeToggle");
if (toggleBtn) {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
  }
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const dark = document.body.classList.contains("dark-mode");
    toggleBtn.textContent = dark ? "☀️" : "🌙";
    localStorage.setItem("theme", dark ? "dark" : "light");

    // 🔥 força atualização nos certificados (se existir)
    document.querySelectorAll(".certificate-card").forEach(card => {
      if (dark) {
        card.style.background = "#1e1e1e";
        card.style.color = "#f1f1f1";
      } else {
        card.style.background = "#fff";
        card.style.color = "#222";
      }
    });
  });
}

// ===== SCROLL SUAVE (mesma página) =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===== REVEAL AO ROLAR (index) =====
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  revealEls.forEach(el => revealObserver.observe(el));
}

// ===== TYPING EFFECT (só se existir .typing) =====
const typingEl = document.querySelector(".typing");
if (typingEl) {
  const text = typingEl.dataset.text || "Henrique";
  let idx = 0;
  function typing() {
    if (idx < text.length) {
      typingEl.textContent += text.charAt(idx);
      idx++;
      setTimeout(typing, 150);
    }
  }
  typing();
}

// ===== BOTÃO VOLTAR AO TOPO =====
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===== Animação de entrada só na timeline (about) =====
const timelineItems = document.querySelectorAll(".timeline-item");
if (timelineItems.length) {
  timelineItems.forEach(item => item.classList.add("fade-in")); // estado inicial
  const timelineObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  timelineItems.forEach(item => timelineObserver.observe(item));
}
