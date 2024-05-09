let modal = document.querySelector(".modal");
let openModalBtn = document.querySelector(".openModal");
let closeBtn = document.querySelector(".content__close");
let form = document.querySelector(".content__form");

openModalBtn.onclick = () => {
  modal.style.display = "block";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

form.addEventListener("submit", function(event) {
  event.preventDefault();

  let formLogin = document.querySelector(".form__username").value.trim();
  let formPassword = document.querySelector(".form__password").value.trim();

  if (formLogin && formPassword) {
    window.location.href = "./pages/home.html";
  }
});
