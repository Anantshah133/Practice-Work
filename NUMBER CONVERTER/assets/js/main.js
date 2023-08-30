function updateValue(a,b){
    var choice = document.getElementById(a).value;

    switch (choice) {
        case "decimal":
            document.getElementById(b).innerHTML = "Decimal";          
            break;
        case "hexadecimal":
            document.getElementById(b).innerHTML = "Hexadecimal";            
            break;
        case "binary":
            document.getElementById(b).innerHTML = "Binary";            
            break;
        case "octal":
            document.getElementById(b).innerHTML = "Octal";            
            break;
        default:
            document.getElementById(b).innerHTML = "";
    }
}
function convert(c1,i1,i2,ans){
    var inputNumber = c1.value;
    var inputType = i1.value;
    var outputType = i2.value;
    var outputNumber;

    if (inputType === "-1" || outputType === "-1") {
        alert("Select Your Choice !!!!");
        return;
    }
    
    if (inputNumber === "") {
        alert("Please Enter The Number You Want To Convert !!!!");
        c1.focus();
        return;
    }

    switch (inputType) {
        case "decimal":
            outputNumber = parseInt(inputNumber);
            break;
        case "hexadecimal":
            outputNumber = parseInt(inputNumber, 16);
            break;
        case "binary":
            outputNumber = parseInt(inputNumber, 2);
            break;
        case "octal":
            outputNumber = parseInt(inputNumber, 8);
            break;
    }

    switch (outputType) {
        case "decimal":
            outputNumber = outputNumber.toString(10);
            break;
        case "hexadecimal":
            outputNumber = outputNumber.toString(16);
            break;
        case "binary":
            outputNumber = outputNumber.toString(2);
            break;
        case "octal":
            outputNumber = outputNumber.toString(8);
            break;
    }

    console.log(outputNumber);
    ans.value = outputNumber;
}