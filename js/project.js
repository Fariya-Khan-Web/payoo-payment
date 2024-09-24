const phoneNumber = document.getElementById('input-number')
const loginButton = document.getElementById('btn-login');
const pinNumber = document.getElementById('input-pin');

loginButton.addEventListener('click', function(event){
    event.preventDefault();
    
    if(phoneNumber.value === '01575377660' && pinNumber.value === 'salar'){
        console.log('you are logged in');
        window.location.href = "./home.html";
    }
    else{
        alert('Invalid phone number or password');
    }
    
})
