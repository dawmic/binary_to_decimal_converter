const num = document.querySelector('.num');
const para = document.querySelector('.para');
const btnClear = document.querySelector('.btn-clear');

let decimal = 0;
let arr = [];


function convert() {

    let inputNumber = num.value;
    let result;

    const inputNumberReversed = inputNumber.split('').reverse();

    for (let i = 0; i < inputNumberReversed.length; i++) {
        decimal = inputNumberReversed[i] * (2 ** i);
        arr.push(decimal);

        result = arr.reduce((a, b) => a + b, 0);
        para.textContent = result;


    }
    arr = [];
};
num.addEventListener('keydown', function(ev) {
    if (ev.keyCode != 48 && ev.keyCode != 49 && ev.keyCode != 8) {
        ev.preventDefault();
    }
});

num.addEventListener('input', convert);

btnClear.addEventListener('click', () => {
    num.value = '';
    para.textContent = '';

});