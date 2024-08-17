// Light/DArk THeme
const toggleElement = document.querySelector(".themes__toggle");

const datkTheme = () => {
  toggleElement.classList.toggle("themes__toggle--isActive");
};

toggleElement.addEventListener("click", datkTheme);
toggleElement.addEventListener("keydown", (e) => {
  e.key === "Enter" && datkTheme();
});

// Logic for Calculator

let storedNumber = "";
let currentNumber = "";
let operation = "";

const resultElement = document.querySelector(".calc__result");
const keyElments = document.querySelectorAll("[data-type]");

// Function for Update screen
const updateScreen = (value) => {
  resultElement.textContent = !value ? "0" : value;
};

// Function for Update Numbers
const buttonNumberHandler = (value) => {
  // const value = element.dataset.value;
  if (value === "." && currentNumber.includes(".")) return;
  if (value === "0" && !currentNumber) return;
  currentNumber += value;
  // resultElement.textContent = currentNumber;
  updateScreen(currentNumber);
};

// Function for Keys iterate
const keysElmentsHandler = (element) => {
  element.addEventListener("click", () => {
    element.dataset.type === "number" && buttonNumberHandler(element.dataset.value);
  });
};

keyElments.forEach(keysElmentsHandler);
