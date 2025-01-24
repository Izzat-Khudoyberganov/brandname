const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".header-nav")

burgerMenu.addEventListener("click", () => {
  console.log("Clicked");
  // if (nav.classList.contains("active")) {
  //   nav.classList.remove("active")
  // } else {
  //   nav.classList.add("active")
  // }
  nav.classList.toggle("active")
  burgerMenu.classList.toggle("active")
});


AOS.init();

