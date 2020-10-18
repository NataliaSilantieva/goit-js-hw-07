const inputRef = document.querySelector('#validation-input')



inputRef.addEventListener('blur',inputValidation);



function inputValidation(){
    const dataLength = Number(inputRef.dataset.length);
    const inputLength = Number(inputRef.value.length); 
    if ( inputLength === dataLength){
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid') 

    } else{
        inputRef.classList.add('invalid') 
        inputRef.classList.remove('valid') 
    }
    
}
