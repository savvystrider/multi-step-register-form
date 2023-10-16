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
stepNumber.textContent = 1;

const dots = Array.from(document.querySelectorAll(".dot"));

let formData = {
  name: nameInput.value,
  email: emailInput.value,
  topics: [],
};

submitBtn.addEventListener("click", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  verifyNameInput();
  verifyEmailInput();
  verifyCheckboxes();
  displaySummary();
  if (formData.topics.length > 0) {
    submitBtn.removeEventListener("click", handleSubmit);
    submitBtn.addEventListener("click", displaySuccess);
  }
}

function verifyNameInput() {
  if (nameInput.value === "") {
    nameInput.style.outline = "1px solid red";
  } else {
    nameInput.style.outline = "none";
  }
}

function verifyEmailInput() {
  if (emailInput.value === "") {
    emailInput.style.outline = "1px solid red";
  } else if (nameInput.value !== "" && emailInput.value !== "") {
    stepOne.classList.add("inactive");
    stepTwo.classList.add("active");
    dots[0].classList.remove("active");
    dots[1].classList.add("active");
    stepNumber.textContent = 2;
  }
}

function verifyCheckboxes() {
  const filterChecked = checkboxes.filter((checkbox) => checkbox.checked);
  if (filterChecked.length > 0) {
    filterChecked.forEach((checkbox) => {
      formData.topics.push(checkbox.dataset.description);
    });
    stepTwo.classList.add("inactive");
    stepThree.classList.add("active");
    dots[1].classList.remove("active");
    dots[2].classList.add("active");
    stepNumber.textContent = 3;
  }
}

function displaySummary() {
  document.getElementById("name-output").textContent = formData.name;
  document.getElementById("email-output").textContent = formData.email;

  topicsList.innerHTML = "";

  formData.topics.forEach((topic) => {
    const listEl = document.createElement("li");
    listEl.textContent = topic;
    topicsList.appendChild(listEl);
  });
}

function displaySuccess(e) {
  e.preventDefault();
  stepThree.classList.add("inactive");
  stepFinal.classList.add("active");
}
