//const counterValue = 

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = value.textContent;
 counterValue = 0;
 

decrementButton.addEventListener('click',decrement);
incrementButton.addEventListener('click', increment);

function decrement (evt){
    
     counterValue -= 1;
     value.textContent = counterValue;
};
function increment (evt){
   
    counterValue +=1;
    
   value.textContent = counterValue;
};
