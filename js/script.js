var button_write_us = document.querySelector(".button-write-us");
var popup_write_us = document.querySelector(".modal");
var button_close_write_us = document.querySelector(".modal-close");
var your_name = popup_write_us.querySelector("[name=name]");
var your_email = popup_write_us.querySelector("[name=email]");
var form_write_us = popup_write_us.querySelector("form");
// var sliders = document.querySelector(".slider-list");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("your_name");
} catch (err) {
  isStorageSupport = false;
}

button_write_us.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_write_us.classList.add("modal-show");
  if (storage) {
    your_name.value = storage;
    your_email.focus();
  }
  your_name.focus();
})

button_close_write_us.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_write_us.classList.remove("modal-show");
  popup_write_us.classList.remove("modal-error");
  console.log("?")
})

form_write_us.addEventListener("submit", function (evt) {
  if (!your_name.value || !your_email.value) {
    evt.preventDefault();
    popup_write_us.classList.remove("modal-error");
    popup_write_us.offsetWidth = popup_write_us.offsetWidth;
    popup_write_us.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("your_name", your_name.value);
    }
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup_write_us.classList.contains("modal-show")) {
      popup_write_us.classList.remove("modal-show");
    }
  }
});
