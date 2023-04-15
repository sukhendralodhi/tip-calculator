const btn = document.getElementById('btn');
const tipAmountEle = document.getElementById('tip-amount');
const totalAmountEle = document.getElementById('total-amount');


const calculateTip = () => {
    const inputAmount = document.getElementById('input-amount');
    const rateService = document.getElementById('service-amount');
    if (inputAmount.value == "" || rateService.value == "") {
        alert('Please input value!');
    } else {
        console.log('Sucess');
        let tipAmount = parseInt(inputAmount.value) * rateService.value;
        tipAmount = Math.ceil(tipAmount);
        tipAmountEle.innerText = `Tip Amount: $${tipAmount}`;

        let totalBill = parseInt(inputAmount.value) + tipAmount;
        console.log(totalBill);
        totalAmountEle.innerText = `Total Amount: $${totalBill}`;
    }
    inputAmount.value = '';
}

btn.addEventListener('click', calculateTip);