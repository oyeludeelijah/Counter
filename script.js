const btnAdd = document.getElementById("add_btn");
const btnSubt = document.getElementById("subt_btn");
const btnRst = document.getElementById("rst_btn");
const number = document.getElementById("number");

let num = 0;

btnAdd.addEventListener("click", () => {
  num += 1;
  number.textContent = num;
});

btnSubt.addEventListener("click", () => {
  num -= 1;
  number.textContent = num;
});

btnRst.addEventListener("click", () => {
  num = 0;
  number.textContent = num;
});
