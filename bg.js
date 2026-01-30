/* ==========================================
   GLOBAL SAFE DOM LOADER
========================================== */
document.addEventListener("DOMContentLoaded", () => {
  console.log(" bg.js Loaded Safely");
});

/* ==========================================
   POPUP ADVERTISEMENT
========================================== */
window.addEventListener("load", function () {
  const popup = document.getElementById("popupAd");
  if (popup) popup.style.display = "flex";
});

// Close Popup
function closePopup() {
  const popup = document.getElementById("popupAd");
  if (popup) popup.style.display = "none";
}









const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");
const hamburgerIcon = document.querySelector("#hamburger i");

// Open sidebar
hamburger.addEventListener("click", () => {
  sidebar.classList.add("show");
  hamburgerIcon.className = "fa-solid fa-xmark";
});

// Close sidebar
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
  hamburgerIcon.className = "fa-solid fa-bars";
});

// Close when a link is clicked
document.querySelectorAll(".sidebar a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("show");
    hamburgerIcon.className = "fa-solid fa-bars";
  });
});








/* ==========================================
   FEATURE SLIDER (slider)
========================================== */
const slider = document.getElementById("slider");
const dotsContainer = document.getElementById("dots");
let boxes = [];

if (slider) boxes = slider.querySelectorAll(".box");

function getBoxesPerView() {
  if (window.innerWidth <= 576) return 1;
  if (window.innerWidth <= 992) return 2;
  return 3;
}

let boxesPerView = getBoxesPerView();
let totalBoxes = boxes.length;
let totalSlides = Math.ceil(totalBoxes / boxesPerView);
let currentIndex = 0;
let dots = [];

// Create dots
function createDots() {
  if (!dotsContainer) return;
  dotsContainer.innerHTML = "";

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      currentIndex = i;
      updateSlider();
      resetInterval();
    });

    dotsContainer.appendChild(dot);
  }
  dots = dotsContainer.querySelectorAll(".dot");
}
if (slider) createDots();

// Update slider position
function updateSlider() {
  if (!slider || boxes.length === 0) return;

  const slideWidth = boxes[0].offsetWidth + 20;
  const offset = slideWidth * boxesPerView * currentIndex;

  slider.scrollTo({ left: offset, behavior: "smooth" });

  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[currentIndex]) dots[currentIndex].classList.add("active");
}

// Auto slide
function nextSlide() {
  if (!slider) return;
  currentIndex++;
  if (currentIndex >= totalSlides) currentIndex = 0;
  updateSlider();
}

let interval = slider ? setInterval(nextSlide, 5000) : null;

function resetInterval() {
  if (!slider) return;
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
}

// Resize event
window.addEventListener("resize", () => {
  if (!slider) return;

  boxesPerView = getBoxesPerView();
  totalSlides = Math.ceil(totalBoxes / boxesPerView);
  createDots();
  updateSlider();
});

/* ==========================================
   FOOTER DYNAMIC YEAR
========================================== */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ==========================================
   EXPERTS SLIDER (slider2)
========================================== */
const slider2 = document.getElementById("slider2");
const dotsContainer2 = document.getElementById("dots2");
let boxes2 = [];

if (slider2) boxes2 = slider2.querySelectorAll(".box2");

function getBoxesPerView2() {
  if (window.innerWidth <= 576) return 1;
  if (window.innerWidth <= 992) return 2;
  return 3;
}

let boxesPerView2 = getBoxesPerView2();
let totalBoxes2 = boxes2.length;
let totalSlides2 = Math.ceil(totalBoxes2 / boxesPerView2);
let currentIndex2 = 0;
let dots2 = [];

// Create dots for slider2
function createDots2() {
  if (!dotsContainer2) return;
  dotsContainer2.innerHTML = "";

  for (let i = 0; i < totalSlides2; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot2");
    if (i === currentIndex2) dot.classList.add("active");

    dot.addEventListener("click", () => {
      currentIndex2 = i;
      updateSlider2();
      resetInterval2();
    });

    dotsContainer2.appendChild(dot);
  }
  dots2 = dotsContainer2.querySelectorAll(".dot2");
}
if (slider2) createDots2();

// Update slider2
function updateSlider2() {
  if (!slider2 || boxes2.length === 0) return;

  const slideWidth = boxes2[0].offsetWidth + 20;
  const offset = slideWidth * boxesPerView2 * currentIndex2;

  slider2.scrollTo({ left: offset, behavior: "smooth" });

  dots2.forEach(dot => dot.classList.remove("active"));
  if (dots2[currentIndex2]) dots2[currentIndex2].classList.add("active");
}

// Auto slide slider2
function nextSlide2() {
  if (!slider2) return;
  currentIndex2++;
  if (currentIndex2 >= totalSlides2) currentIndex2 = 0;
  updateSlider2();
}

let interval2 = slider2 ? setInterval(nextSlide2, 5000) : null;

function resetInterval2() {
  if (!slider2) return;
  clearInterval(interval2);
  interval2 = setInterval(nextSlide2, 5000);
}

// Resize slider2
window.addEventListener("resize", () => {
  if (!slider2) return;

  boxesPerView2 = getBoxesPerView2();
  totalSlides2 = Math.ceil(totalBoxes2 / boxesPerView2);
  createDots2();
  updateSlider2();
});

/* galexy */
const images = document.querySelectorAll(".card img");
const lightbox = document.getElementById("lightbox");
let lightboxImg = null;

if (lightbox) {
  lightboxImg = lightbox.querySelector("img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}




/*  EMAILJS CONTACT FORM  */
function mailSend() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("massage");

  if (!name || !email || !message) {
    alert("Form fields missing!");
    return;
  }

  let params = {
    name: name.value,
    email: email.value,
    massage: message.value,
  };

  emailjs
    .send("service_8iaoo34", "template_ofndufj", params)
    .then(() => {
      alert(" Email sent successfully!");
      name.value = "";
      email.value = "";
      message.value = "";
    })
    .catch(error => {
      console.log("FAILED...", error);
      alert(" Email not sent");
    });
}
