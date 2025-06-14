const changeColor = document.querySelector("#changeColor");
changeColor.onclick = goDark;
const body = document.querySelector("body");
const colors = [
  {
    name: "Dark",
    styles: ["#0d1b2a", "#e0e1dd"],
    "button text": "Light",
    "button color": ["#caf0f8", "#0d1b2a", "linear-gradient(#caf0f8, #ade8f4)"],
    "button function": goLite,
  },
  {
    name: "Light",
    styles: ["#e0e1dd", "#0d1b2a"],
    "button text": "Dark",
    "button color": ["#778da9", "#e0e1dd", "linear-gradient(#778da9, #415a77)"],
    "button function": goDark,
  },
];

function goLite() {
  changeTheme(colors[1]);
  changeColor.style.border = "3px solid #415a77";
}

function goDark() {
  changeTheme(colors[0]);
  changeColor.style.border = "3px solid #ade8f4";
}

function changeTheme(color) {
  body.style.backgroundColor = color["styles"][0];
  body.style.color = color["styles"][1];
  changeColor.style.backgroundColor = color["button color"][0];
  changeColor.style.color = color["button color"][1];
  changeColor.style.backgroundImage = color["button color"][2];
  changeColor.innerText = color["button text"];
  changeColor.onclick = color["button function"];
}
