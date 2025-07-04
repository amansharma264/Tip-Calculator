const bill = document.getElementById('bill');
const tip = document.getElementById('tip');
const calculate = document.getElementById('calculate');
const result = document.getElementById('total');

function tipCalculator(){
    const totalbill = bill.value;
    const totaltip = tip.value;
    const total = totalbill*(1 + totaltip)/100;
    result.innerText = total.toFixed(2);
}

calculate.addEventListener("click", tipCalculator);