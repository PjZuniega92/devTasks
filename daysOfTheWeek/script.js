const textUpdate = document.querySelector("#textUpdate");
const monBtn = document.getElementById("monBtn");
const tueBtn = document.getElementById("tueBtn");
const wedBtn = document.getElementById("wedBtn");
const thuBtn = document.getElementById("thuBtn");
const friBtn = document.getElementById("friBtn");
const satBtn = document.getElementById("satBtn");
const sunBtn = document.getElementById("sunBtn");

monBtn.onclick = () => update("Monday");
tueBtn.onclick = () => update("Tuesday");
wedBtn.onclick = () => update("Wednesday");
thuBtn.onclick = () => update("Thursday");
friBtn.onclick = () => update("Friday");
satBtn.onclick = () => update("Saturday");
sunBtn.onclick = () => update("Sunday");

function update(day) {
  switch (day) {
    case "Monday":
      textUpdate.innerText =
        "Waah. It's Monday again, pressure is real! But, let's start this with positivity!";
      break;
    case "Tuesday":
      textUpdate.innerText =
        "Tuesday! at least we are now done with some pending work. We got this!";
      break;
    case "Wednesday":
      textUpdate.innerText =
        "I am now in the middle of the work week. 2 more days to go!";
      break;
    case "Thursday":
      textUpdate.innerText =
        "Thursday! Thursday! This is it. Gotta do my best to finish important meetings and deadline. Fridayyyy is approaching!";
      break;
    case "Friday":
      textUpdate.innerText =
        "Fridaaaaaaay! I love Friday. Since I am almost done with everything, I can finish all work before this shift ends. TGIF!!";
      break;
    case "Saturday":
      textUpdate.innerText =
        "Saturday! Had a beauty rest last night. Today, Imma try to go shopping or maybe visit favorite or new places. Seize the day!";
      break;
    case "Sunday":
      textUpdate.innerText =
        "Sunday! God and family day! a day of full happiness and rest! What a beautiful day. This is my favorite, my comfort day before Monday!";
      break;
    default:
      textUpdate.innerText = "What a wonderful week!";
      break;
  }
}
