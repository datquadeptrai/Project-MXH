var login = document.querySelector(".username");
var password = document.querySelector(".password");
var button = document.querySelector(".mtr-btn.signin");

button.addEventListener("click", function () {
  if (login.value.length == 0 || password.value.length == 0) {
    alert("Hãy nhập tên đăng nhập và mật khẩu");
  } else {
    window.location.href = "mainpage.html";
  }
});
