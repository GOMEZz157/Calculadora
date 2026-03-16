// Seleção de elementos
const display = document.querySelector("#display");

// Funções
const insertToDisplay = (data) => {
  if (display.value === "0") {
    display.value = data;
  } else {
    display.value += data;
  }
};

const clearAll = () => {
  display.value = "0";
};

const deleteLast = () => {
  display.value = display.value.slice(0, -1);

  if (display.value === "") {
    display.value = "0";
  }
};

const calculateResult = () => {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = "Error";
  }
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
