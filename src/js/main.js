const buttonMore = document.querySelector('#more');
const buttonLess = document.querySelector('#less');
const numberInputElement = document.querySelector('#quantity');
const numberOutputElements = document.querySelectorAll('.count');
const resetButtonElement = document.querySelector('#reset');

const numberOutputs = [...numberOutputElements].map((number) => {
    return Number(number.textContent);
});

function changeInput(currentNumber) {
    const currentNum = Number(currentNumber);
    if(currentNumber !== '') {
        numberInputElement.setCustomValidity("");
        numberOutputElements.forEach((numberElement, index) => {
        const current = numberOutputs[index]*currentNum/4;
        numberElement.textContent = current;
       }); 
    } else {
        numberInputElement.setCustomValidity("Введите нужное число порций");
        numberInputElement.reportValidity();
    }
}
numberInputElement.addEventListener('input', (e) => {
    if(numberInputElement.validity.stepMismatch) {
        numberInputElement.setCustomValidity("");
        console.log(Math.round(numberInputElement.value));
        numberInputElement.value = Math.round(numberInputElement.value);
    }
    if(e.target.value > 10) {
        numberInputElement.value = 10;
    }
    if(e.target.value < 1 && e.target.value !== '') {
        numberInputElement.value = 1;
    }
    changeInput(e.target.value);
});
numberInputElement.addEventListener('keydown', (e) => {
    if(e.key === '.' || e.key === ',') {
        e.preventDefault();
    };
    
});
buttonMore.addEventListener('click', (e) => {
    numberInputElement.stepUp();
    changeInput(numberInputElement.value);
});
buttonLess.addEventListener('click', (e) => {
    numberInputElement.stepDown();
    changeInput(numberInputElement.value);
});
resetButtonElement.addEventListener('click', (e) => {
    numberInputElement.value = 4;
    numberInputElement.setCustomValidity("");
    numberOutputElements.forEach((numberElement, index) => {
        numberElement.textContent = numberOutputs[index];
    }); 
});