var link = document.querySelector(".promo__order");
var popup = document.querySelector(".add-cart");
var close = popup.querySelector(".add-cart__button");
var form = popup.querySelector("form");
var size = localStorage.getItem("add-cart__size");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("add-cart--show");
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
