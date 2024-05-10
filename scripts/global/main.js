//ADAPTIVE HEADER
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


//scrollToTopBtn 
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Функция, которая показывает кнопку при прокрутке вниз
window.addEventListener("scroll", () => {
  // Если прокрутка больше чем 20 пикселей от верха страницы, показываем кнопку
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Функция, которая позволяет прокрутить страницу вверх при нажатии на кнопку
scrollToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
});