/******************************************************
 * Ian Sanchez Baca
 * script.js
 * This actually handles the math part
*******************************************************/

function doMath(expression){
    // console.log(expression);
    let numStack = []; // holds the numbers 
    let num = ""; // holds the current number
    let opStack = []; // holds the operators
    let result = 0;

    for(let i = 0; i < expression.length; i++){
        // console.log(expression[i]);

        if(!isNaN(expression[i])){ // check if the char is a number                   
            num += expression[i]; // making the number from expression
        }
        else{
            /* This should always be one of the available symbols 
             * The string is already filtered 
            */
            numStack.push(parseInt(num)); // convert num to int and pass it in to numStack
            opStack.push(expression[i]); // pass in the operator to the opStack
            num = "";
        }
    }

    if(num.length) { /* pass in the last number */
        numStack.push(parseInt(num));
    }


    // for(let i = 0; i < numStack.length; i++){
    //     console.log(numStack[i]);
    // }
    
    /* Evaluate the expression from left to right */
    while(opStack.length){ // keep going until opStack is empty
        let num1 = numStack.shift();
        let num2 = numStack.shift();
        let op = opStack.shift();
        

        switch (op){
            case '+':
                result = num2 + num1;
                break;
            
            case '-':
                result = num2 - num1;
                break;

            case '*':
                result = num2 * num1;
                break;

            case '/':
                if(num1 == 0){ /* divide by zero */
                    return "Error: Divide by zero";
                }
                result = num2 / num1;
                break;
        }

        numStack.unshift(result);
    }
    
    // console.log(result);
    
    return result;
}

// stack.push(10);