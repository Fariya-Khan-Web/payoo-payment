let available = document.getElementById('available').innerText;

// Add-money

const buttonAdd = document.getElementById('btn-add-money');
const moneyPin = document.getElementById('input-pin');
const amount = document.getElementById('input-amount');

buttonAdd.addEventListener('click', function(event){
    event.preventDefault();

    if(moneyPin.value === 'salar'){
        available = parseFloat(available);
        let amountNumber = parseFloat(amount.value)
        available = available + amountNumber;
        
        document.getElementById('available').innerText = available;
    }
    else{
        alert('Failed to add money. Please try again.')
    }
})