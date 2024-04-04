function calculate(){
    let firstNumber = document.getElementById('first-number').value;
    let secondNumber = document.getElementById('second-number').value;
    let selectedOperator = document.getElementById('operator').value;

    if(firstNumber==""){
        alert("Please Input First Number");
    }
    else if(secondNumber==""){
        alert("Please Input Second Number");
    }
    else{
        alert("Okay");
    }
}