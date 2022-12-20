const calculatedValue = document.getElementById("calculatedValue");
let string = " ";
const equalBtn = document.getElementById("equal");
const resetBtn = document.getElementById("reset");
const delBtn = document.getElementById("Del");

function Insert(num) {
  string = string + num;
  calculatedValue.value = string;
}
function operator(ope) {
  string = string + ope;
  calculatedValue.value = string;
}
equalBtn.addEventListener("click", () => {
  try {
    let final = eval(string);
    calculatedValue.value = final;
    return (string = final);
  } catch (error) {
    console.log(error);
    calculatedValue.value = "unexpected input please reset and try";
  }
});

function clear() {
  string = "";
  calculatedValue.value = string;
}
resetBtn.addEventListener("click", clear);
delBtn.addEventListener("click", clear);
