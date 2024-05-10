const hamburgerBtn = document.querySelector(".hamburger__icon");

hamburgerBtn.addEventListener("click", () => {
  let header = document.querySelector(".header");
  header.classList.toggle("show-header");

  let headerLogo = document.querySelector(".header__logo");
  headerLogo.innerHTML += `<span class="content__close">&times;</span>`;
  let close = document.querySelector(".content__close");
  close.style.fontSize = "24px";
  close.style.marginLeft = "26%";

  close.addEventListener("click", () => {
    header.classList.toggle("show-header");
    if (close) {
      close.remove();
    }
  });
});
