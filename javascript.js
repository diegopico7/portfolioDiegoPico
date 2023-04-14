let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");
let text1 = document.getElementById("text1");
let link = document.getElementById("link");

window.addEventListener("scroll", function () {
  var value = window.scrollY;

  bg.style.top = value * 0.5 + "px";
  moon.style.left = -value * 2 + "px";
  mountain.style.top = -value * 0.15 + "px";
  road.style.top = value * 0.15 + "px";
  text.style.top = value * 1 + "px";
  text1.style.top = value * 1 + "px";
  // link.style.right = -value * 1.5 + "px";
});
