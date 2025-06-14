const changeColor = document.querySelector("#changeColor");
changeColor.onclick = changeTheme;
const bgTxtColor = [
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

function goLite() {}

function goDark() {}

function changeTheme(colors) {}
