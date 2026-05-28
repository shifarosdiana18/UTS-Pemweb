/* ========================= */
/* NAVBAR SCROLL */
/* ========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  navbar.classList.toggle(
    "active",
    window.scrollY > 50
  );

});

/* ========================= */
/* HAMBURGER MENU */
/* ========================= */

const menuToggle =
  document.getElementById("menu-toggle");

const navLinks =
  document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});

/* ========================= */
/* CLOSE MENU CLICK */
/* ========================= */

document.querySelectorAll(".nav-links a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("active");

    });

  });

/* ========================= */
/* SCROLL REVEAL */
/* ========================= */

const reveals =
  document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSection);

function revealSection() {

  reveals.forEach((item) => {

    const windowHeight = window.innerHeight;

    const revealTop =
      item.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {

      item.classList.add("active");

    }

  });

}

revealSection();

/* ========================= */
/* TYPING EFFECT */
/* ========================= */

const typingText =
  document.querySelector(".typing");

const text =
  "Future Web Developer & UI Designer";

let index = 0;

function typeEffect() {

  if (index < text.length) {

    typingText.innerHTML += text.charAt(index);

    index++;

    setTimeout(typeEffect, 80);

  }

}

typeEffect();

/* ========================= */
/* ACTIVE NAVBAR LINK */
/* ========================= */

const sections =
  document.querySelectorAll("section");

const navItems =
  document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.offsetHeight;

    if (scrollY >= sectionTop) {

      current = section.getAttribute("id");

    }

  });

  navItems.forEach(link => {

    link.classList.remove("current");

    if (
      link.getAttribute("href")
      .includes(current)
    ) {

      link.classList.add("current");

    }

  });

});

/* ========================= */
/* PARALLAX HERO */
/* ========================= */

const hero =
  document.querySelector(".hero");

window.addEventListener("scroll", () => {

  let offset = window.pageYOffset;

  hero.style.backgroundPositionY =
    offset * 0.5 + "px";

});

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {

  button.addEventListener("click", () => {

    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    button.classList.add("active");

    document
      .getElementById(button.dataset.tab)
      .classList.add("active");

  });

});
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        cards.forEach(item => {
            item.classList.remove("active");
        });

        card.classList.add("active");

    });

});

document.addEventListener("DOMContentLoaded", function(){

    const btn = document.getElementById("showProjectsBtn");
    const hiddenProjects = document.getElementById("hiddenProjects");
    const wrapper = document.querySelector(".show-more-wrapper");

    btn.addEventListener("click", function(){

        hiddenProjects.classList.toggle("show");

        if(hiddenProjects.classList.contains("show")){

            btn.textContent = "Sembunyikan Proyek";

            /* pindahin button ke bawah hidden projects */
            hiddenProjects.after(wrapper);

        }else{

            btn.textContent = "Lihat Semua Proyek";

            /* balikin button ke posisi awal */
            document.querySelector(".projects-grid").after(wrapper);

        }

    });

});

/* ========================= */
/* DARK LIGHT MODE */
/* ========================= */

const themeToggle =
  document.getElementById("theme-toggle");

const themeIcon =
  themeToggle.querySelector("i");

/* CEK LOCAL STORAGE */

if(localStorage.getItem("theme") === "light"){

  document.body.classList.add("light-mode");

  themeIcon.classList.remove("fa-moon");

  themeIcon.classList.add("fa-sun");

}

/* TOGGLE */

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  /* SIMPAN MODE */

  if(document.body.classList.contains("light-mode")){

    localStorage.setItem("theme", "light");

    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");

  }else{

    localStorage.setItem("theme", "dark");

    themeIcon.classList.remove("fa-sun");

    themeIcon.classList.add("fa-moon");

  }

});
const form = document.querySelector(".contact-form");
const btn = document.getElementById("submitBtn");

form.addEventListener("submit", async function(e) {
    e.preventDefault();

    // loading
    btn.innerHTML = "Mengirim...";
    btn.disabled = true;

    const formData = new FormData(form);

    try {

        const response = await fetch(form.action, {
            method: "POST",
            body: formData
        });

        if(response.ok){

            btn.innerHTML = "Pesan Terkirim ✓";

            form.reset();

            setTimeout(() => {
                btn.innerHTML = "Kirim Pesan";
                btn.disabled = false;
            }, 3000);

        } else {

            btn.innerHTML = "Gagal Mengirim";

            setTimeout(() => {
                btn.innerHTML = "Kirim Pesan";
                btn.disabled = false;
            }, 3000);
        }

    } catch(error){

        btn.innerHTML = "Gagal Mengirim";

        setTimeout(() => {
            btn.innerHTML = "Kirim Pesan";
            btn.disabled = false;
        }, 3000);
    }
});

const timelineCards = document.querySelectorAll(".timeline-card");
const timelineIcons = document.querySelectorAll(".timeline-icon");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.75;

  timelineCards.forEach((card, index) => {
    const top = card.getBoundingClientRect().top;
    if(top < trigger){
      setTimeout(() => {
        card.classList.add("show");
      }, index * 300);
    }
  });

  timelineIcons.forEach((icon, index) => {
    const top = icon.getBoundingClientRect().top;
    if(top < trigger){
      setTimeout(() => {
        icon.classList.add("show");
      }, index * 200);
    }
  });
});