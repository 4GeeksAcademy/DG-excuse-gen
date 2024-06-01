/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function randomItem(arr) {
  const index = randomIndex(arr);
  return arr[index];
}

window.onload = function() {
  //write your code here
  console.log("Excuse generator console");

  const whos = [
    "The dog",
    "My Teacher",
    "My boyfriend",
    "My mom",
    "My teacher",
    "My boss"
  ];
  const whats = [
    "ate",
    "pooped",
    "threw away",
    "destroyed",
    "burned",
    "lost",
    "sold"
  ];
  const avoids = [
    "my homework",
    "my tickets",
    "my bills",
    "my recipes",
    "my projects"
  ];
  const whens = [
    "last month!",
    "yesterday!",
    "last week!",
    "last year!",
    "last birthday!"
  ];

  const who = randomItem(whos);
  const what = randomItem(whats);
  const avoid = randomItem(avoids);
  const when = randomItem(whens);

  const randomExcuse = who + " " + what + " " + avoid + " " + when;
  document.querySelector("h1").innerText = randomExcuse;
};
