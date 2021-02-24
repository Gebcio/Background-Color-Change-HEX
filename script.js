"use strict";

const body = document.querySelector("body");
const hexCode = document.querySelector("span");
const button = document.querySelector("button");

const hexCharacters = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

const randomHexBackgroundColor = function (arr) {
  let randomHexCode = "#";
  for (let i = 0; i < 6; i++) {
    const randomCharacter = arr[Math.floor(Math.random() * 16)];
    randomHexCode += randomCharacter;
  }
  body.style.backgroundColor = randomHexCode;
  hexCode.textContent = randomHexCode;
};

button.addEventListener("click", function () {
  randomHexBackgroundColor(hexCharacters);
});
