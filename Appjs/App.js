//-------------------------- Slide Show -----------------------//
let slideIndex = 0;
showSlides();
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}
//-----------------------------UP BUTTON------------------------------ //
let upButton = document.querySelector(".up-button");

window.onscroll = function () {
  if (window.scrollY >= 500) {
    upButton.style.right = "20px";
  } else {
    upButton.style.right = "-80px";
  }
};

upButton.onclick = function () {
  document.body.scrollTop = 0; // for safari
  document.documentElement.scrollTop = 0;
};
//-----------------------------Menue Bar------------------------------ //
let bar = document.getElementById("bar");
let closeBar = document.getElementById("close");
let links = document.querySelector(".navbar .container ");

bar.onclick = function () {
  links.style.display = "block";
  bar.style.display = "none";
  closeBar.style.display = "block";
  links.style.transition = "display 0.4s ease-in-out";
};
closeBar.onclick = function () {
  links.style.display = "none";
  closeBar.style.display = "none";
  bar.style.display = "block";
};
