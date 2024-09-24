let availableOut = document.getElementById('available').innerText;

//Cash-Out

const buttonOut = document.getElementById('btn-out-money');
const amountOut = document.getElementById('input-amount-out');
const moneyPinOut = document.getElementById('input-pin-out');

buttonOut.addEventListener('click', function(event){
    event.preventDefault();

    if(moneyPinOut.value === 'salar'){
        let outNumber = parseFloat(amountOut.value);
        availableOut = parseFloat(availableOut);
        availableOut = availableOut - outNumber;
        
        document.getElementById('available').innerText = availableOut;
    }
    else{
        alert('Wrong pin number')
    }
})