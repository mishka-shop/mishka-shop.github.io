var links = document.querySelectorAll(".catalog-goods__icon-cart");
var popup = document.querySelector(".add-cart");
var close = popup.querySelector(".add-cart__button");
var form = popup.querySelector("form");
var size = localStorage.getItem("add-cart__size");

Array.from(links).forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("add-cart--show");
  });
});

form.addEventListener("submit", function(evt) {
  localStorage.setItem("size", size.value);
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("add-cart--show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("add-cart--show")) {
      popup.classList.remove("add-cart--show");
    }
  }
});
