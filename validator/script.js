const validateBtn = document.querySelector("#validate");
validateBtn.onclick = () => {
  validatingSecondVersion();
};

let age = 25;
let register = true;

function validating() {
  if (age >= 18 && register) alert("You are a valid voter. You may vote now!");
  else if (!register && age >= 18) alert("Register First, please.");
  else if (register && age < 18) alert("Invalid voter.");
  else alert("Non voter.");
}

function validatingSecondVersion() {
  if (register) {
    if (age >= 18) alert("You may vote now!");
    else alert("Invalid voter!");
  } else {
    if (age >= 18) alert("Register first, please.");
    else alert("Non voter!");
  }
}
