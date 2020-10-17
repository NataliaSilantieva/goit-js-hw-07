const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
inputRef.addEventListener('input',nameInput);
let userName = outputRef.textContent;



function nameInput(event) {
if (event.currentTarget.value === '') { 
    outputRef.textContent = userName;
} else{
    let userName =  event.target.value; 
outputRef.textContent = `${userName}`;
}
}