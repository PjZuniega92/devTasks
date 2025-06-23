const validateBtn = document.querySelector("#validate");
validateBtn.onclick = () => {
  validating();
};

function validating() {
  let age = 19;
  let register = true;

  if (age >= 18 && register) alert("You are a valid voter. You may vote now!");
  else if (!register && age >= 18) alert("Register First, please.");
  else if (register && age < 18) alert("Invalid voter.");
  else alert("Non voter.");
}
