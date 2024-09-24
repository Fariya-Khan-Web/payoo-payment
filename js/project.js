const phoneNumber = document.getElementById('input-number')
const loginButton = document.getElementById('btn-login');

loginButton.addEventListener('click', function(event){
    event.preventDefault();
    console.log(phoneNumber.value)
    
})
