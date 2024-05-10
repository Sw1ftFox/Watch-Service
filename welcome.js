let main = document.querySelector(".main");

main.innerHTML += `  
  <div class="modal">
    <div class="modal__content">
      <span class="content__close">&times;</span>
      <h2>Login to account</h2>
      <form class="content__form">
        <label for="form__username">Login:</label>
        <input type="text" class="form__username" name="username" required>
        <label for="form__password">Password:</label>
        <input type="password" class="form__password" name="password" required>
        <input class="form__button" type="submit" value="Login">
      </form>
    </div>
  </div>
`;

let openModalBtn = document.querySelector(".openModal");
let modal = document.querySelector(".modal");
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

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let formLogin = document.querySelector(".form__username").value.trim();
  let formPassword = document.querySelector(".form__password").value.trim();

  if (formLogin && formPassword) {
    window.location.href = "./pages/home.html";
  }
});
