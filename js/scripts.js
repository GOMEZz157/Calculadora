// Seleção de elementos
const display = document.querySelector("#display");

// Funções
const insertToDisplay = (data) => {
  display.value += data;
};

const clearAll = () => {
  display.value = "";
};

const deleteLast = () => {
  display.value = display.value.slice(0, -1);
};

const calculateResult = () => {
  try {
    display.value = eval(display.value)
  } catch (err) {
    display.value("Error")
  }
};
