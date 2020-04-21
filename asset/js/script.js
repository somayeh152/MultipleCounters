import { createCounter } from './creatCounter.js';


// Add new counter
const addCounter = () => {
    const addCounterBtn = document.getElementById('addCounterBtn');

addCounterBtn.addEventListener("click", function(e){
    e.preventDefault();
    const addCounterInput = document.getElementById('addCounterInput');
    const feedback = document.querySelector('.error');
    
    if(addCounterInput.value === ''){

        feedback.innerHTML = "Fill the box";

        addCounterInput.addEventListener("focus" , function(){
            feedback.innerHTML = "";
        });

    }else{
        const countersHolder = document.getElementById('countersHolder');
        countersHolder.appendChild(createCounter());
        addCounterInput.value = '';
    }
});

}

window.onload = addCounter;
