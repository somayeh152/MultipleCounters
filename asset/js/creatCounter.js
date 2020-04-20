// create elements easier  
const createElm = (type, className, content) => {
    let element = document.createElement(type);
    element.innerHTML = content !== undefined ? content : null;
    element.className += className !== undefined ? className : null;
    return element;
}

// create new counter
let createCounter = () => {
    let step = 0;
    
    // const counter = document.createElement('div');
    // counter.className += "counter";
    const counter = createElm('div', "counter");

    // const counterHeader = document.createElement('div');
    // counterHeader.className += "counterHeader";
    const counterHeader = createElm('div', "counterHeader");
    counter.appendChild(counterHeader);

    // const stepSpan = document.createElement('span');
    // stepSpan.innerHTML = "Step: ";
    const stepSpan = createElm('span', "" ,"Step: ");
    counterHeader.appendChild(stepSpan);

    // const showStep = document.createElement('span');
    // showStep.className += 'showStep';
    // showStep.innerText = addCounterInput.value;
    const showStep = createElm('span', "showStep" ,addCounterInput.value);
    counterHeader.appendChild(showStep);

    // const counterBody = document.createElement('div');
    // counterBody.className += "counterBody";
    const counterBody = createElm('div', "counterBody");
    counter.appendChild(counterBody);

    // let holderSum = document.createElement('h3');
    // holderSum.className += "holderSum";
    // holderSum.innerHTML = step;
    let holderSum = createElm('h3', 'holderSum', step);
    counterBody.appendChild(holderSum);
    
    // let runBtn = document.createElement('button');
    // runBtn.type = "button";
    // runBtn.className += "btn btn-primary runBtn";
    // runBtn.innerHTML = "Run";
    let runBtn = createElm('button', 'btn btn-primary runBtn', "Run");
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