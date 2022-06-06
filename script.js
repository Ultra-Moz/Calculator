const button = document.querySelectorAll(".button")
const buttonParent = document.querySelector(".buttons")
const functionBtns = document.querySelector(".functions")
const workingText = document.querySelector('.working-text')
const answerText = document.querySelector(".answer-text")


let calculatorTextContent = '';
let firstNumber = 0;
let secondNumber = 0;
let operator;





const equal = function(num1, num2, operator){



    num1 = +num1
    num2 = +num2
    switch(operator){
        case '+':
            firstNumber = num1 + num2
            break

        case '-':
            firstNumber = num1 - num2
            break
        case '*':
            firstNumber = num1 * num2
            break
        case '/':
            firstNumber = num1 / num2
            break
            
    }

    return firstNumber;

}

buttonParent.addEventListener('click', function(e){
    if(e.target.classList.contains("number")){
        calculatorTextContent += e.target.value
        answerText.textContent = calculatorTextContent;
    } else if (e.target.classList.contains('operators')){

        if(answerText.textContent == ''){
            calculatorTextContent = '0';
        }

        firstNumber = calculatorTextContent;
        operator = e.target.value;
        workingText.textContent = `${calculatorTextContent} ${e.target.textContent}`;
        calculatorTextContent = '';
    } else if (e.target.classList.contains('equal')){

        if(answerText.textContent == ''){
            calculatorTextContent = '0';
        }

        secondNumber = calculatorTextContent;

        if(secondNumber == ''){
            calculatorTextContent = '0'
        }
        
        workingText.textContent += " " + calculatorTextContent + " " + e.target.value;
        calculatorTextContent = equal(firstNumber, secondNumber, operator)
        answerText.textContent = calculatorTextContent
        
    }
    else if(e.target.classList.contains("ac")){
        calculatorTextContent = ''
        firstNumber = 0
        secondNumber = 0
        operator = ''
        workingText.textContent = ''
        answerText.textContent = ''
    }
    else if(e.target.classList.contains("c")){
        calculatorTextContent = calculatorTextContent.substring(0, calculatorTextContent.length - 1)
        answerText.textContent = calculatorTextContent

    }

})