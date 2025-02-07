const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".header-nav");

burgerMenu.addEventListener("click", () => {
  console.log("Clicked");
  nav.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  if(burgerMenu.classList.contains("active")) {
    document.body.style.overflow="hidden"
  } else {
    document.body.style.overflow="auto"
  }
});

AOS.init();

// loader
// setTimeout(() => {
//   console.log("Time is out");
//   document.querySelector("#loader").style.display = "none";
//   document.querySelector("header").style.display = "block";
//   document.querySelector("main").style.display = "block";
//   document.querySelector("footer").style.display = "block";
// }, 3000);

// DIALOG
const body = document.querySelector("body");
const modal = document.querySelector(".login-modal");
const showModal = document.querySelector(".login-btn");
const closeModal = document.querySelector(".close-modal-btn");
const loginSubmitBtn = document.querySelector(".login-form_button");

const loginForm = document.querySelector(".login-form");
showModal.addEventListener("click", () => {
  modal.showModal();
  document.body.style.classList.add("active");
});

closeModal.addEventListener("click", () => {
  modal.close();
});

loginSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.reset();
  modal.close();
});
