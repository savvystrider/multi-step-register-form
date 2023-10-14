const submitBtn = document.getElementById("submit-btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const checkboxes = Array.from(
  document.querySelectorAll("input[type=checkbox]")
);

const stepOne = document.querySelector(".step-one");
const stepTwo = document.querySelector(".step-two");
const stepThree = document.querySelector(".step-three");

const steps = [stepOne, stepTwo, stepThree];
let stepIndex = 0;

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  verifyInputs();

  if (nameInput.value !== "" && emailInput.value !== "") {
    steps[stepIndex].classList.add("inactive");
    steps[stepIndex + 1].classList.add("active");

    const checkboxChecked = checkboxes.some((checkbox) => checkbox.checked);

    if (checkboxChecked) {
      stepIndex++;
    }
  }
});

function verifyInputs() {
  if (nameInput.value === "") {
    nameInput.style.outline = "1px solid red";
  } else {
    nameInput.style.outline = "none";
  }

  if (emailInput.value === "") {
    emailInput.style.outline = "1px solid red";
  } else {
    emailInput.style.outline = "none";
  }
}
