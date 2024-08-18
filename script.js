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

// Reset Function
const resetButtonHandler = () => {
  storedNumber = "";
  currentNumber = "";
  operation = "";
  updateScreen("0");
};

//Delete Handler

const deleteButtonHandler = () => {
  currentNumber = currentNumber.slice(0, -1);
  updateScreen(currentNumber);
};

const executeOperation = () => {
  if (currentNumber && storedNumber && operation) {
    switch (operation) {
      case "+":
        storedNumber = parseFloat(storedNumber) + parseFloat(currentNumber);
        break;
      case "-":
        storedNumber = parseFloat(storedNumber) - parseFloat(currentNumber);
        break;
      case "/":
        storedNumber = parseFloat(storedNumber) / parseFloat(currentNumber);
        break;
      case "*":
        storedNumber = parseFloat(storedNumber) * parseFloat(currentNumber);
        break;
    }
    currentNumber = "";
    updateScreen(storedNumber);
  }
};

const operationButtonHandler = (operationValue) => {
  if (!storedNumber && !currentNumber) return;
  if (currentNumber && !storedNumber) {
    storedNumber = currentNumber;
    currentNumber = "";
    operation = operationValue;
  } else if (storedNumber) {
    operation = operationValue;
    currentNumber && executeOperation();
  }
};

// Function for Keys iterate
const keysElmentsHandler = (element) => {
  element.addEventListener("click", () => {
    if (element.dataset.type === "number") {
      buttonNumberHandler(element.dataset.value);
    } else if (element.dataset.type === "operation") {
      switch (element.dataset.value) {
        case "c":
          resetButtonHandler();
          break;
        case "Backspace":
          deleteButtonHandler();
          break;
        case "Enter":
          executeOperation();
          break;
        default:
          operationButtonHandler(element.dataset.value);
      }
    }
  });
};

//Execute Operation

keyElments.forEach(keysElmentsHandler);
