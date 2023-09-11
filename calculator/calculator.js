let calculation = JSON.parse(localStorage.getItem('calculationSaved')) || '';
function caclculate(value) {
    calculation += value;
    localStorage.setItem('storeCalculation', JSON.stringify(calculation));
    document.querySelector('.outputResult').innerHTML = calculation;
}

function showCalculation() {
    document.querySelector('.outputResult').innerHTML = calculation;
}