var text1 = document.querySelector(".search-box textarea");
var btn = document.querySelector(".search-box button");
var post1Cha = document.querySelector(".post1");
var post1 = document.querySelector(".post1 p");
var post2Cha = document.querySelector(".post2");
var post2 = document.querySelector(".post2 p");
var post3Cha = document.querySelector(".post3");
var post3 = document.querySelector(".post3 p");
var post4 = document.querySelector(".post4 p");
var post5 = document.querySelector(".post5 p");
var post4Cha = document.querySelector(".post4");
var post5Cha = document.querySelector(".post5");
var value1;
var a1, a2, a3, a4, a5;
var count = 0;
var post1Time = document.querySelector(".post1 h6");
var post2Time = document.querySelector(".post2 h6");
var post3Time = document.querySelector(".post3 h6");
var post4Time = document.querySelector(".post4 h6");
var post5Time = document.querySelector(".post5 h6");

var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var day = d.getDate();
var month = d.getMonth() + 1;
if (m < 10) {
  m = "0" + m;
}
if (h < 10) {
  h = "0" + h;
}
var time = day + "/" + month + "  " + h + ":" + m;

btn.addEventListener("click", checkPost);

checkLuu();

function checkLuu() {
  if (
    localStorage.getItem("searchluu1") !== "" &&
    localStorage.getItem("searchluu1") !== null
  ) {
    post1Cha.style.display = "block";
    post1.textContent = localStorage.getItem("searchluu1");
    post1Time.textContent = localStorage.getItem("timeluu1");
    count = 1;
    if (
      localStorage.getItem("searchluu2") !== "" &&
      localStorage.getItem("searchluu2") !== null
    ) {
      post2Cha.style.display = "block";
      post2.textContent = localStorage.getItem("searchluu2");
      post2Time.textContent = localStorage.getItem("timeluu2");
      count = 2;
      if (
        localStorage.getItem("searchluu3") !== "" &&
        localStorage.getItem("searchluu3") !== null
      ) {
        post3Cha.style.display = "block";
        post3.textContent = localStorage.getItem("searchluu3");
        post3Time.textContent = localStorage.getItem("timeluu3");
        count = 3;
        if (
          localStorage.getItem("searchluu4") !== "" &&
          localStorage.getItem("searchluu4") !== null
        ) {
          post4Cha.style.display = "block";
          post4.textContent = localStorage.getItem("searchluu4");
          post4Time.textContent = localStorage.getItem("timeluu4");
          count = 4;
          if (
            localStorage.getItem("searchluu5") !== "" &&
            localStorage.getItem("searchluu5") !== null
          ) {
            post5Cha.style.display = "block";
            post5.textContent = localStorage.getItem("searchluu3");
            post5Time.textContent = localStorage.getItem("timeluu5");
            count = 5;
          }
        }
      }
    }
  }
}

function postContent1() {
  value1 = text1.value;
  localStorage.setItem("search", value1);
  a1 = localStorage.getItem("search");
  localStorage.setItem("searchluu1", a1);
  time1 = time;
  localStorage.setItem("timeluu1", time1);
  if (a1 != "") {
    post1.textContent = a1;
    post1Cha.style.display = "block";
    text1.value = "";
    post1Time.textContent = time1;
  }
}

function postContent2() {
  value1 = text1.value;
  localStorage.setItem("search", value1);
  a2 = localStorage.getItem("search");
  localStorage.setItem("searchluu2", a2);
  time2 = time;
  localStorage.setItem("timeluu2", time2);
  if (a2 != "") {
    post2.textContent = a2;
    post2Cha.style.display = "block";
    text1.value = "";
    post2Time.textContent = time2;
  }
}

function postContent3() {
  value1 = text1.value;
  localStorage.setItem("search", value1);
  a3 = localStorage.getItem("search");
  localStorage.setItem("searchluu3", a3);
  time3 = time;
  localStorage.setItem("timeluu3", time3);
  if (a3 != "") {
    post3.textContent = a3;
    post3Cha.style.display = "block";
    text1.value = "";
    post3Time.textContent = time3;
  }
}

function postContent4() {
  value1 = text1.value;
  localStorage.setItem("search", value1);
  a4 = localStorage.getItem("search");
  localStorage.setItem("searchluu4", a4);
  time4 = time;
  localStorage.setItem("timeluu4", time4);
  if (a4 != "") {
    post4.textContent = a4;
    post4Cha.style.display = "block";
    text1.value = "";
    post4Time.textContent = time4;
  }
}

function postContent5() {
  value1 = text1.value;
  localStorage.setItem("search", value1);
  a5 = localStorage.getItem("search");
  localStorage.setItem("searchluu5", a5);
  time5 = time;
  localStorage.setItem("timeluu5", time5);
  if (a5 != "") {
    post5.textContent = a5;
    post5Cha.style.display = "block";
    text1.value = "";
    post5Time.textContent = time5;
  }
}

function checkPost() {
  count++;
  if (count == 1) {
    postContent1();
  }
  if (count == 2) {
    postContent2();
  }
  if (count == 3) {
    postContent3();
  }
  if (count == 4) {
    postContent4();
  }
  if (count == 5) {
    postContent5();
    btn.style.background = "grey ";
  }
  if (count > 5) {
    alert("Đã đạt giới hạn đăng bài hằng ngày.");
    text1.value = "";
  }
}
