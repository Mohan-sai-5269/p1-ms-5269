const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (button.id === "clear") {
      currentInput = "";
      display.value = "";
    } else if (button.id === "equal") {
      if (currentInput.trim() !== "") {
        // Evaluate the mathematical expression safely
        try {
          const result = eval(currentInput);
          display.value = result;
          currentInput = result.toString();
        } catch {
          display.value = "Error";
          currentInput = "";
        }
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
