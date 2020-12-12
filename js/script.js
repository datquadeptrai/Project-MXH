var input;
var post1, post2, post3, post4, post5;

post1 = document.querySelector(".post1");
post2 = document.querySelector(".post2");
post3 = document.querySelector(".post3");
post4 = document.querySelector(".post4");
post5 = document.querySelector(".post5");

var textarea1, textarea2, textarea3, textarea4, textarea5;

input = document.querySelector(".search-box textarea");

var btnPost = document.querySelector(".search-box button");

function checkbai() {
  if (check1() == false) {
    post1.style.display = "block";
  }
  if (check2() == false) {
    post2.style.display = "block";
  }
  if (check3() == false) {
    post3.style.display = "block";
  }
  if (check4() == false) {
    post4.style.display = "block";
  }
  if (check5() == false) {
    post5.style.display = "block";
  }
}

btnPost.addEventListener("click", dangbai);

function dangbai() {
  if (check1()) {
    localStorage.setItem("textarea1", input.value);
  } else if (check2()) {
    localStorage.setItem("textarea2", input.value);
  } else if (check3()) {
    localStorage.setItem("textarea3", input.value);
  } else if (check4()) {
    localStorage.setItem("textarea4", input.value);
  } else if (check5()) {
    localStorage.setItem("textarea5", input.value);
  }
  location.reload();
}

// function
function check1() {
  if (
    localStorage.getItem("textarea1") == "" &&
    localStorage.getItem("textarea1") == null
  ) {
    return true;
  } else {
    return false;
  }
}
function check2() {
  if (
    localStorage.getItem("textarea2") == "" &&
    localStorage.getItem("textarea2") == null
  ) {
    return true;
  } else {
    return false;
  }
}
function check3() {
  if (
    localStorage.getItem("textarea3") == "" &&
    localStorage.getItem("textarea3") == null
  ) {
    return true;
  } else {
    return false;
  }
}
function check4() {
  if (
    localStorage.getItem("textarea4") == "" &&
    localStorage.getItem("textarea4") == null
  ) {
    return true;
  } else {
    return false;
  }
}
function check5() {
  if (
    localStorage.getItem("textarea5") == "" &&
    localStorage.getItem("textarea5") == null
  ) {
    return true;
  } else {
    return false;
  }
}
