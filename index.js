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

    const filterChecked = checkboxes.filter((checkbox) => checkbox.checked);

    if (filterChecked) {
      filterChecked.forEach((checkbox) => {
        formData.topics.push(checkbox.dataset.description);
      });
      stepIndex++;
    }

    document.getElementById("name-output").textContent = formData.name;
    document.getElementById("email-output").textContent = formData.email;

    const formMap = formData.topics
      .forEach((topic) => {
        const listEl = document.createElement("li");
        listEl.textContent = topic;
        topicsList.appendChild(listEl);
      })
      .join("");
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
