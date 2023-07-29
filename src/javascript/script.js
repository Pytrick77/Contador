const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

const uppdateValue = () => {
    value.innerHTML =  count;
};

let count = 0;
let intervalId = 0;


plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => { 
        count += 1;
        uppdateValue();
    }, 100);
});

minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => { 
        count -= 1;
        uppdateValue();
    }, 100);
});

resetButton.addEventListener('click', () => {
    count = 0;
    uppdateValue();
});

document.addEventListener('mouseup', () => clearInterval(intervalId));
