function calculate(){
    let firstInput = document.getElementById('first-number');
    let secondInput = document.getElementById('second-number');
    let selectedOperator = document.getElementById('operator');
    let resultDisplay = document.getElementById('result-display');

    // Checking if first Number is inputted
    if(firstInput.value==""){
        //alert("Please Input First Number");
        resultDisplay.classList.replace('alert-info','alert-danger');
        resultDisplay.textContent = "Please Input the First Number";
        firstInput.classList.add('bg-danger');
    }
    // Checking if first Number is inputted
    else if(secondInput.value==""){
        //alert("Please Input Second Number");
        resultDisplay.classList.replace('alert-info','alert-danger');
        resultDisplay.textContent = "Please Input the Second Number";
        firstInput.classList.remove('bg-danger');
        secondInput.classList.add('bg-danger');
    }
    // Checking if second number is 0 in case of division (/) operation
    else if((selectedOperator.value=="/")&&(secondInput.value==0)){
        //alert(firstInput.value+" can't be devided with a 0");
        resultDisplay.classList.replace('alert-info','alert-danger');
        resultDisplay.textContent = firstInput.value+" can't be devided with a 0";
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
        resultDisplay.classList.remove('alert-danger');
        resultDisplay.classList.remove('alert-info');
        resultDisplay.classList.add('text-white','bg-success');
        resultDisplay.textContent = "Calculated Result= "+theResult.toFixed(2);
    }
}