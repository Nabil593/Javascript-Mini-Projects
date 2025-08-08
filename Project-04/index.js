const count = document.querySelector('.count');
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const changeBtn = document.querySelector('.changeBy');
const resetBtn = document.querySelector('.reset');

plusBtn.addEventListener("click", () => {
    const countvalue = parseInt(count.innerHTML);
    const changeByValue = parseInt(changeBtn.value);
    count.innerHTML = countvalue + changeByValue;
});

minusBtn.addEventListener("click", () => {
    const countvalueMinus = parseInt(count.innerHTML);
    const changeByValue = parseInt(changeBtn.value);
    count.innerHTML = countvalueMinus - changeByValue;
});

resetBtn.addEventListener("click", () => {
    count.innerText = 0;
})