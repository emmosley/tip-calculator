const button = document.querySelector("button");
console.log(button);
const output = document.querySelector(".output");
const cost = document.querySelector("input");
function tipCalc(event) {
    output.innerText = `20%: ${(cost.value*.20).toFixed(2)}
    15%: ${(cost.value*.15).toFixed(2)}
    10%: ${(cost.value*.10).toFixed(2)}`;
}

button.addEventListener("click", tipCalc); 