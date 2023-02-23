const span = document.querySelector('#show-fibo');
const input = document.querySelector('#input');
const button = document.querySelector('button');
const errorMessage = document.querySelector('#error-message');



button.addEventListener('click',() => {
    
    const inputValue = Number(input.value);

    if(!inputValue || inputValue <= 0) {
        errorMessage.classList.add('d-block');
        errorMessage.classList.remove('d-none')
        return;
    }

    errorMessage.classList.add('d-none');
    errorMessage.classList.remove('d-block');

    let fibo = [0,1];
    
    for(let i = 1; i <= inputValue; i++) {
        
       if(inputValue === 1) {
         fibo.pop();
         break;
       }

       if(inputValue === 2) {
        break;
       }

       if(i === 1 || i === 2) {
         continue;
       }
       
       fibo.push(fibo[i - 2] + fibo[i - 3]);

    }

    span.innerText = fibo;
})