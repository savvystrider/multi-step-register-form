const submitBtn = document.getElementById("submit-btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const checkboxes = Array.from(
  document.querySelectorAll("input[type=checkbox]")
);

const topicsList = document.getElementById("topics-list");

const stepOne = document.querySelector(".step-one");
const stepTwo = document.querySelector(".step-two");
const stepThree = document.querySelector(".step-three");

const steps = [stepOne, stepTwo, stepThree];
let stepIndex = 0;
const stepNumber = document.getElementById("step-number");

let formData = {};

stepNumber.textContent = stepIndex + 1;

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  verifyInputs();

  if (nameInput.value !== "" && emailInput.value !== "") {
    formData = {
      name: nameInput.value,
      email: emailInput.value,
      topics: [],
    };
    stepNumber.textContent = stepIndex + 1;
    steps[stepIndex].classList.add("inactive");
    steps[stepIndex + 1].classList.add("active");
    stepNumber.textContent = stepIndex + 2;
    const filterChecked = checkboxes.filter((checkbox) => checkbox.checked);

    if (filterChecked.length > 0) {
      filterChecked.forEach((checkbox) => {
        formData.topics.push(checkbox.dataset.description);
      });
      stepIndex++;
    }

    document.getElementById("name-output").textContent = formData.name;
    document.getElementById("email-output").textContent = formData.email;

    // Clear the previous list items in topicsList
    topicsList.innerHTML = "";

    const formMap = formData.topics.forEach((topic) => {
      const listEl = document.createElement("li");
      listEl.textContent = topic;
      topicsList.appendChild(listEl);
    });
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
