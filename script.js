const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
});



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}





let featSlideIndex = 1;
featShowSlides(featSlideIndex);

// Next/previous controls
function featPlusSlides(n) {
  featShowSlides((featSlideIndex += n));
}

// Thumbnail image controls
function featCurrentSlide(n) {
  featShowSlides((featSlideIndex = n));
}

function featShowSlides(n) {
  let i;
  let featSlides = document.getElementsByClassName("fearture-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > featSlides.length) {
    featSlideIndex = 1;
  }
  if (n < 1) {
    featSlideIndex = featSlides.length;
  }
  for (i = 0; i < featSlides.length; i++) {
    featSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  featSlides[featSlideIndex - 1].style.display = "block";
}



let logoSlideIndex = 1;
logoShowSlides(logoSlideIndex);

// Next/previous controls
function logoPlusSlides(n) {
  logoShowSlides((logoSlideIndex += n));
}

// Thumbnail image controls
function logoCurrentSlide(n) {
  logoShowSlides((logoSlideIndex = n));
}

function logoShowSlides(n) {
  let i;
  let logoSlides = document.getElementsByClassName("logo-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > logoSlides.length) {
    logoSlideIndex = 1;
  }
  if (n < 1) {
    logoSlideIndex = logoSlides.length;
  }
  for (i = 0; i < logoSlides.length; i++) {
    logoSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  logoSlides[logoSlideIndex - 1].style.display = "block";
}


let buildHeading = document.getElementById("build-heading");

let footerPara = document.getElementById('footer-para')

let windowInnerwidth = 400;

if (windowInnerwidth === 400) {
    buildHeading.innerHTML = "HOW WE BUILD<br><span class='light-bold'>WITH HYDRA VR?</span>"
    footerPara.innerHTML = "2023 &copy; HYDRA LANDING PAGE <br> BY ZINE. E. FALOUTI <br> ALL RIGHTS RESERVED ";
}


let numberSlideIndex = 1;
numberShowSlides(numberSlideIndex);

// Next/previous controls
function numberPlusSlides(n) {
  numberShowSlides((numberSlideIndex += n));
}

// Thumbnail image controls
function numberCurrentSlide(n) {
  numberShowSlides((numberSlideIndex = n));
}

function numberShowSlides(n) {
  let i;
  let numberSlides = document.getElementsByClassName("number-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > numberSlides.length) {
    numberSlideIndex = 1;
  }
  if (n < 1) {
    numberSlideIndex = numberSlides.length;
  }
  for (i = 0; i < numberSlides.length; i++) {
    numberSlides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  numberSlides[numberSlideIndex - 1].style.display = "block";
}



const btnNavEl = document.querySelector(".btn-mobile-nav");


const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});