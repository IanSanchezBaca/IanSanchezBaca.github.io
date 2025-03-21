/******************************************************
 * Ian Sanchez Baca
 * script.js
 * This handles the button and the input 
*******************************************************/



/* This function filters the input box to only allow numbers and such */
document.getElementById("calcInput").addEventListener("input", function () {
    // Allowed characters: numbers (0-9), math symbols ( + - * / ( ) )
    this.value = this.value.replace(/[^0-9+\-*/]/g, '');
});


/* This function runs when the button is clicked */
document.getElementById("calcButton").addEventListener("click", function () {
    let inputValue = document.getElementById("calcInput").value; 
    // Get input value
    // This is also the function above

    if (inputValue.trim() === "") { /* This checks that the input isnt empty */
        alert("Please enter a valid expression!");        
        return;
    }   

    try {        
        let result = doMath(inputValue); 
        document.getElementById("result").textContent = "Result: " + result;
        
    } catch (error) {

        document.getElementById("result").textContent = "Error in calculation.";

    }

});
