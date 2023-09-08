let calculation = JSON.parse(localStorage.getItem('calculationSaved')) || '';
function caclculate(value) {
    calculation += value;
    localStorage.setItem('storeCalculation', JSON.stringify(calculation));
    console.log(calculation);
}