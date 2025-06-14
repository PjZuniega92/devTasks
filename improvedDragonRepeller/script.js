const changeColor = document.querySelector("#changeColor");
changeColor.onclick = goDark;
const body = document.querySelector("body");
const colors = [
  {
    name: "Dark",
    styles: ["#0d1b2a", "#e0e1dd"],
    "button text": "Light Mode",
    "button function": goLite,
  },
  {
    name: "Light",
    styles: ["#e0e1dd", "#0d1b2a"],
    "button text": "Dark Mode",
    "button function": goDark,
  },
];

function goLite() {
  changeTheme(colors[1]);
}

function goDark() {
  changeTheme(colors[0]);
}

function changeTheme(color) {
  body.style.backgroundColor = color["styles"][0];
  body.style.textColor = color["styles"][1];
  changeColor.innerText = color["button text"];
  changeColor.onclick = color["button function"];
}
