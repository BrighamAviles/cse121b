/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }
  
function addNumbers() {
    let add1 = Number (document.getElementById("add1").value);
    let add2 = Number (document.getElementById("add2").value);

    document.querySelector('#sum').value = add(add1,add2);
    
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function Subtract(subtract1, subtract2) {
    return subtract1 - subtract2;
  }
  
function subtractNumbers() {
    let sub1 = Number (document.getElementById("subtract1").value);
    let sub2 = Number (document.getElementById("subtract2").value);

    document.querySelector('#difference').value = Subtract(sub1,sub2);
    
}

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
function multiply(muliply1, multiply2) {
    return muliply1 * multiply2;
  }
function multiplyNumber() {
    let multy1 = Number (document.getElementById("factor1").value);
    let multy2 = Number (document.getElementById("factor2").value);

    document.querySelector('#product').value = multiply(multy1,multy2);
 
}

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumber);


/* Open Function Use - Divide Numbers */
function divide(divide1, divide2) {
    return divide1 / divide2;
  }

function divideNumber() {
    let div1 = Number (document.getElementById("dividend").value);
    let div2 = Number (document.getElementById("divisor").value);

    document.querySelector('#quotient').value = divide(div1,div2);

}

document.getElementById("divideNumbers").addEventListener("click", divideNumber);



/* Decision Structure */

    document.getElementById('getTotal').addEventListener('click', function() {

        let subtotalValue = parseFloat(document.getElementById('subtotal').value);
    
        let applyDiscount = document.getElementById('member').checked;
    
        if (applyDiscount) {
          subtotalValue = subtotalValue * 0.8; // 20% discount
        }
        console.log(applyDiscount + " " + subtotalValue);
        document.getElementById("total").innerText = "$" + subtotalValue.toFixed(2);
    });

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.getElementById('array').innerText = `${numbersArray}`;

/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 !== 0);

document.getElementById('odds').innerText = `${oddNumbers}`;

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */

sumOfArray = numbersArray.reduce((sum, number) => sum + number);
document.getElementById('sumOfArray').innerText = ` ${sumOfArray}`;
/* Output Multiplied by 2 Array */

multiplied = numbersArray.map(number => number * 2);
document.getElementById('multiplied').innerText = ` ${multiplied}`;

/* Output Sum of Multiplied by 2 Array */
sumOfMultiplied = numbersArray.reduce((sum, number) => sum + number * 2 );
document.getElementById('sumOfMultiplied').innerText = ` ${sumOfMultiplied}`;
