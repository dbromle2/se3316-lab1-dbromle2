//dbromle2
//SE 3316 Lab1

function searchNum(id){
    //declarations
    var numberIn = id.value;
    var num = /^[0-9]*$/; //objective C. only numbers
    var isNumberValid = 1;

    var validate = num.exec(numberIn); //validate the number (no +/- symbols)

    var isNumSub21 = 1;
    if (numberIn > 0 & numberIn < 21){ //objective C. only numbers 1-20 are valid inputs
        isNumSub21 = 1;
    } else {
        isNumSub21 = 0;
        alert("Invalid input");
    }

    if (isNumSub21){
        //search code goes here
        alert("Is this what you're looking for?");
    }
    else alert("Invalid input");
}
function searchName(id){
    //declarations
    var stringIn = id.value;
    var alpha = /^[a-zA-Z]*$/; //objective C. only a-z or A-Z chars
    var isStringValid = 1;

    var validate = alpha.exec(stringIn); //validate the string
    var isStringValid = Boolean(validate);

    var isStringSub21 = 1;
        
    if (isStringValid){
        var len = stringIn.length;
        if (len <21) isStringSub21 = 1; //objective C. string is less than 20 chars long
        else {
            isStringSub21 = 0;
            alert("That name is too long!");
        }
    }

    if (isStringValid && isStringSub21) {
        //search code goes here
        alert("Is this what you're looking for?");
    }
    else alert("Invalid input");
}
