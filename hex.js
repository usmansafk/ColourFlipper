const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const colorText = document.querySelector(".color");
const button = document.querySelector(".btn");
const body = document.getElementsByTagName("body");

const generateHex = function () {
  let hexy = "#";
  for (let i = 0; i < 6; i++) {
    const randomValue = Math.floor(Math.random() * hex.length);
    hexy += hex[randomValue];
  }
  return hexy;
};

button.addEventListener("click", function () {
  let hexy = generateHex();
  colorText.textContent = hexy;
  body[0].style.background = colorText.textContent;
});

// Steps:
// 1. Select Elements: h2, button, body tag
// 2. Generate random hex using hex array items
// 3. Create Button Event; when clicked replace the text inside the h2 and change the body background col. Move the random inside event.
