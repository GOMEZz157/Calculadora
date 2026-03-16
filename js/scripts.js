// Seleção de elementos
const display = document.querySelector("#display");
const historyList = document.querySelector("#history-list");
let justCalculated = false;

// Funções
const insertToDisplay = (data) => {
  const operators = ["+", "-", "*", "/"];

  if (operators.includes(data) && operators.includes(display.value.slice(-1))) {
    return;
  }
  
  if (justCalculated) {
    display.value = data;
    justCalculated = false;
    return;
  }

  if (display.value === "0") {
    display.value = data;
  } else {
    display.value += data;
  }
};

const clearAll = () => {
  display.value = "0";
  justCalculated = false;
};

const deleteLast = () => {
  display.value = display.value.slice(0, -1);

  if (display.value === "") {
    display.value = "0";
  }
};

const calculateResult = () => {
  try {
    const expression = display.value;
    const result = eval(expression);

    const p = document.createElement("p");
    p.innerText = `${expression} = ${result}`;
    historyList.appendChild(p);

    display.value = result;

    justCalculated = true;
  } catch (err) {
    display.value = "Error";

    setTimeout(() => {
      display.value = "0";
    }, 1000);
  }
};

const clearHistory = () => {
  historyList.innerHTML = "";
};

document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    insertToDisplay(key);
  }

  if (key === "Enter") {
    calculateResult();
  }

  if (key === "Backspace") {
    deleteLast();
  }

  if (key === "Escape") {
    clearAll();
  }
});
