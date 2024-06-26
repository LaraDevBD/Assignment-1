function calculate(){
    let firstInput = document.getElementById('first-number');
    let secondInput = document.getElementById('second-number');
    let selectedOperator = document.getElementById('operator');
    let resultDisplay = document.getElementById('result-display');

    // Checking if first Number is inputted and the value is number
    if((firstInput.value=="")||(isNaN(firstInput.value)==true)){
        //alert("Please Check First Number");
        resultDisplay.classList.remove('bg-primary','bg-success');
        resultDisplay.classList.add('bg-danger');
        resultDisplay.textContent = "First Number is Invalid for Operation";
        firstInput.classList.add('bg-danger');
    }
    // Checking if Second Number is inputted and the value is number
    else if((secondInput.value=="")||(isNaN(secondInput.value)==true)){
        //alert("Please Check Second Number");
        resultDisplay.classList.remove('bg-primary','bg-success');
        resultDisplay.classList.add('bg-danger');
        resultDisplay.textContent = "Second Number is Invalid for Operation";
        firstInput.classList.remove('bg-danger');
        secondInput.classList.add('bg-danger');
    }
    // Checking if second number is 0 in case of division (/) operation
    else if((selectedOperator.value=="/")&&(secondInput.value==0)){
        //alert("A number can't be devided with a 0");
        resultDisplay.classList.remove('bg-primary','bg-success');
        resultDisplay.classList.add('bg-danger');
        resultDisplay.textContent = "A number can't be devided with a 0";
        firstInput.classList.remove('bg-danger');
        secondInput.classList.add('bg-danger');
    }
    // If all checking done
    else{
        firstInput.classList.remove('bg-danger');
        secondInput.classList.remove('bg-danger');
        let theResult = 0;
        switch(true){
            case (selectedOperator.value=="+"):
                // alert("Plus");
                theResult = parseFloat(firstInput.value)+parseFloat(secondInput.value);
            break;
            case (selectedOperator.value=="-"):
                // alert("Minus");
                theResult = parseFloat(firstInput.value)-parseFloat(secondInput.value);
            break;
            case(selectedOperator.value=="*"):
                // alert("Multiply");
                theResult = parseFloat(firstInput.value)*parseFloat(secondInput.value);
            break;
            case(selectedOperator.value=="/"):
                // alert("Division");
                theResult = parseFloat(firstInput.value)/parseFloat(secondInput.value);
            break;
        }
        resultDisplay.classList.remove('bg-primary','bg-danger'); 
        resultDisplay.classList.add('bg-success');
        resultDisplay.textContent = "Calculated Result= "+theResult.toFixed(2); 
    }
}