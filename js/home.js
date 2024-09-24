const addPageBtn = document.getElementById('show-add-money-page');
const addPage = document.getElementById('add-money-page');
const outPageBtn = document.getElementById('show-cash-out-page');
const outPage = document.getElementById('cash-out-page');

outPageBtn.addEventListener('click', function(){

    outPage.classList.remove('hidden')
    addPage.classList.add('hidden')


})

addPageBtn.addEventListener('click', function(){

    addPage.classList.remove('hidden')
    outPage.classList.add('hidden')
})