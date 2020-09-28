//dbromle2
//SE 3316 Lab1

//array of pokemon data
var pokeNumbers = [" 001", " 002", " 003", " 004", " 005", " 006", " 007", " 008", " 009", " 010", 
                    " 011", " 012", " 013", " 014", " 015", " 016", " 017", " 018", " 019", " 020"];
var pokeNames = [" Bulbasaur", " Ivysaur", " Venusaur", " Charmander", " Charmeleon", " Charizard", " Squirtle", " Wartortle", " Blastoise", " Caterpie", 
                    " Metapod", " Butterfree", " Weedle", " Kakuna", " Beedrill", " Pidgey", " Pidgeotto", " Pidgeot", " Rattata", " Raticate"];
var pokemon = []
for (i=0; i<20; i++){
    pokemon[i] = pokeNumbers[i]+pokeNames[i];
}

//Function to search the pokedex by pokemon number using the number input by the user
function searchNum(id){
    //declarations
    var numberIn = id.value;
    var num = /^[0-9]*$/; //objective C. only numbers

    var newNumberIn = num.exec(numberIn); //validate the number (no +/- symbols)

    var isNumSub21 = 1;
    if (numberIn > 0 & numberIn < 21){ //objective C. only numbers 1-20 are valid inputs
        isNumSub21 = 1;
    } else {
        isNumSub21 = 0;
    }

    if (isNumSub21){
        //call the function to search the array for any matching entries
        searchDex(newNumberIn,1);
    }
    else alert("Invalid input");
}

//Function to search the pokedex by pokemon name using the string input by the user
function searchName(id){
    //declarations
    var stringIn = id.value;
    var alpha = /^[a-zA-Z]*$/; //objective C. only a-z or A-Z chars
    var isStringValid = 1;

    var validate = alpha.exec(stringIn); //validate the string
    var isStringValid = Boolean(validate);
    var newStringIn = validate;

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
        //call the function to search the array for any matching entries
        searchDex(newStringIn,0);
    }
    else alert("Invalid input");
}

function searchDex(query, varType){
    //declarations
    var hitCounter = 0;
    var hits = [];
    var printouts = [];

    //if varType is high, search by pokedex number
    if (varType){
        for (var i in pokeNumbers){
            if (hitCounter <5){
                if (pokeNumbers[i].indexOf(query) > -1){
                    hits.push(i);
                    hitCounter++;
                }
            }
        }

    //if varType is low, search by pokedex name
    } else {
        for (var i in pokeNames){
            if (hitCounter < 5){
                if (pokeNames[i].indexOf(query) > -1){
                    hits.push(i);
                    hitCounter++;
                }
            }
        }
    }
    
    //translate the hits array of indices into the printout num+name 
    if (hitCounter > 0){
        for (var i in hits){
            printouts.push(pokemon[hits[i]]);
        }
        alert("Is this what you're looking for?\n\n"+ printouts);
    } else alert("No matches found!");
}
