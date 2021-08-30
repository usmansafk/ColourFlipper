const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const h2 = document.querySelector(".color");
const btn = document.querySelector(".btn");
const body = document.getElementsByTagName("body");

btn.addEventListener("click", function (e) {
  const randomNum = Math.floor(Math.random() * colors.length);
  h2.textContent = colors[randomNum];
  body[0].style.background = h2.textContent;
});

// Steps:
// 1. Select Elements: h2, button, body tag
// 2. Create Random num generator
// 3. Create Button Event; when clicked replace the text inside the h2 and change the body background col. Move the random inside event.
