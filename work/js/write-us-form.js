
var link = document.querySelector(".contact-button");
var popup = document.querySelector(".write-us-popup");
var close = document.querySelector(".close-popup");
var form = popup.querySelector("form");
var login = form.querySelector(".name-field");
var mail = form.querySelector(".mail-field");
var storageLogin = localStorage.getItem("login");
var storageMail = localStorage.getItem("mail");

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27 && popup.classList.contains("popup-show")) {
    popup.classList.remove("popup-show")
  }
});

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("popup-show");
        popup.classList.add("flipInX");
        
        if(storageLogin) {
          login.value-storageLogin;
        } else {
          mail.focus();
        }
      });
      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("popup-show");
        popup.classList.remove("flipInX");
      });
      form.addEventListener("submit", function(event) {
      if(!login.value||!mail.value) {
        event.preventDefault();
        console.log("Ввести логин и пароль");
        }  else {
           localStorage.setItem("login", login.value);
           localStorage.setItem("mail", login.value);
  }
      });