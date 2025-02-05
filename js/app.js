const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".header-nav");

burgerMenu.addEventListener("click", () => {
  console.log("Clicked");
  nav.classList.toggle("active");
  burgerMenu.classList.toggle("active");
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
const modal = document.querySelector(".login-modal");
const showModal = document.querySelector(".login-btn");
const closeModal = document.querySelector(".close-modal-btn");
const loginSubmitBtn = document.querySelector(".login-form_button");

const loginForm = document.querySelector(".login-form");
showModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

loginSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.reset();
  modal.close();
});
