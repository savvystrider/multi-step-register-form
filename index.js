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
const stepFinal = document.querySelector(".step-final");
const steps = [stepOne, stepTwo, stepThree, stepFinal];

const stepNumber = document.getElementById("step-number");
let stepIndex = 0;

let formData = {};

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  verifyInput(nameInput);
  verifyInput(emailInput);

  if (nameInput.value !== "" && emailInput.value !== "") {
    formData = {
      name: nameInput.value,
      email: emailInput.value,
      topics: [],
    };

    steps[stepIndex].classList.add("inactive");
    steps[stepIndex + 1].classList.add("active");

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

    formData.topics.forEach((topic) => {
      const listEl = document.createElement("li");
      listEl.textContent = topic;
      topicsList.appendChild(listEl);
    });
  }
});

function verifyInput(input) {
  if (input.value === "") {
    input.style.outline = "1px solid red";
  } else {
    input.style.outline = "none";
  }
}
