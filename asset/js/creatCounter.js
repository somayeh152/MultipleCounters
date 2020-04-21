// create elements easier  
const createElm = (type, className, content) => {
    let element = document.createElement(type);
    element.innerHTML = content !== undefined ? content : null;
    element.className += className !== undefined ? className : null;
    return element;
}

// create new counter
const createCounter = () => {
    let step = 0;
    
    const counter = createElm('div', "counter");

    const counterHeader = createElm('div', "counterHeader");
    counter.appendChild(counterHeader);

    const stepSpan = createElm('span', "" ,"Step: ");
    counterHeader.appendChild(stepSpan);

    const showStep = createElm('span', "showStep" ,addCounterInput.value);
    counterHeader.appendChild(showStep);

    const counterBody = createElm('div', "counterBody");
    counter.appendChild(counterBody);

    const holderSum = createElm('h3', 'holderSum', step);
    counterBody.appendChild(holderSum);

    const runBtn = createElm('button', 'btn btn-primary runBtn', "Run");
    runBtn.type = "button";
    //increase number in every counter
    runBtn.addEventListener("click", function(){
        step += Number(showStep.innerText);
        holderSum.innerText = step;
    });
    counterBody.appendChild(runBtn);


    return counter;
}

export { createCounter }; 