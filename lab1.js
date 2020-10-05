//dbromle2
//SE 3316 Lab1

//Each Pokedex Entry is an object for easy DOM manipulation
function dexEntry(Numbers, Names, Img, Desc, Type1, Type2){
    this.Numbers = Numbers;
    this.Names = Names;
    this.Img = Img;
    this.Desc = Desc;
    this.Type1 = Type1;
    this.Type2 = Type2;
}
var pokeDex = [];
pokeDex.push(new dexEntry("001", "Bulbasaur", "1.png", "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.", "Grass", "Poison"));
pokeDex.push(new dexEntry("002", "Ivysaur", "2.png", "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.", "Grass", "Poison"));
pokeDex.push(new dexEntry("003", "Venusaur", "3.png", "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.", "Grass", "Poison"));
pokeDex.push(new dexEntry("004", "Charmander", "4.png", "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.", "Fire", ""));
pokeDex.push(new dexEntry("005", "Charmeleon", "5.png", "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.", "Fire", ""));
pokeDex.push(new dexEntry("006", "Charizard", "6.png", "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.", "Fire", ""));
pokeDex.push(new dexEntry("007", "Squirtle", "7.png", "When it retracts its long neck into its shell, it squirts out water with vigorous force.", "Water", ""));
pokeDex.push(new dexEntry("008", "Wartortle", "8.png", "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.", "Water", ""));
pokeDex.push(new dexEntry("009", "Blastoise", "9.png", "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.", "Water", ""));
pokeDex.push(new dexEntry("010", "Caterpie", "10.png", "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.", "Bug", ""));
pokeDex.push(new dexEntry("011", "Metapod", "11.png", "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.", "Bug", ""));
pokeDex.push(new dexEntry("012", "Butterfree", "12.png", "In battle, it flaps its wings at great speed to release highly toxic dust into the air.", "Bug", "Flying"));
pokeDex.push(new dexEntry("013", "Weedle", "13.png", "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.", "Bug", "Poison"));
pokeDex.push(new dexEntry("014", "Kakuna", "14.png", "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.", "Bug", "Poison"));
pokeDex.push(new dexEntry("015", "Beedrill", "15.png", "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.", "Bug", "Poison"));
pokeDex.push(new dexEntry("016", "Pidgey", "16.png", "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.", "Normal", "Flying"));
pokeDex.push(new dexEntry("017", "Pidgeotto", "17.png", "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.", "Normal", "Flying"));
pokeDex.push(new dexEntry("018", "Pidgeot", "18.png", "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.", "Normal", "Flying"));
pokeDex.push(new dexEntry("019", "Rattata", "19.png", "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.", "Normal", ""));
pokeDex.push(new dexEntry("020", "Raticate", "20.png", "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.", "Normal", ""));


//Info arrays for the search functions
var pokeNumbers = [" 001", " 002", " 003", " 004", " 005", " 006", " 007", " 008", " 009", " 010", 
                    " 011", " 012", " 013", " 014", " 015", " 016", " 017", " 018", " 019", " 020"];
var pokeNames = [" bulbasaur", " ivysaur", " venusaur", " charmander", " charmeleon", " charizard", " squirtle", " wartortle", " blastoise", " caterpie", 
                    " metapod", " butterfree", " weedle", " kakuna", " beedrill", " pidgey", " pidgeotto", " pidgeot", " rattata", " raticate"];

var pokemon = [];
for (i=0; i<20; i++){
    pokemon[i] = pokeNumbers[i]+pokeNames[i];
}

//Populate the pokedex with entries on initial page load
function pageInit(){
    var uList = document.getElementById("pokeList");
    for (i in pokemon){
        //Allocating all information from the pokeDex dexEntry objects
        var lItem = document.createElement("li");
        var lNum = document.createElement("h2");
        lNum.innerHTML = ("#"+pokeDex[i].Numbers);
        var lName = document.createElement("h2");
        lName.innerHTML = pokeDex[i].Names;
        var lImg = document.createElement("img");
        lImg.setAttribute("src", pokeDex[i].Img);
        lImg.setAttribute("alt", pokeDex[i].Names);
        var lDesc = document.createElement("p");
        lDesc.innerHTML = pokeDex[i].Desc;
        var lTable = document.createElement("table");
        var lTableTr = document.createElement("tr");
        var lTableTd1 = document.createElement("td");
        lTableTd1.className = pokeDex[i].Type1;
        lTableTd1.innerHTML = pokeDex[i].Type1;
        var lTableTd2 = document.createElement("td");
        lTableTd2.className = pokeDex[i].Type2;
        lTableTd2.innerHTML = pokeDex[i].Type2;


        //Appending all information to the HTML
        lItem.appendChild(lNum);
        lItem.appendChild(lName);
        lItem.appendChild(lImg);
        lItem.appendChild(lDesc);
        lTableTr.appendChild(lTableTd1);
        lTableTr.appendChild(lTableTd2);
        lTable.appendChild(lTableTr);
        lItem.appendChild(lTable);

        //Final step add the newly made <li> to the existing <ul>
        uList.appendChild(lItem);
    }
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
    var emptyCheck = document.getElementById("searchboxName").value;
    if (emptyCheck == ""){
        while(searchList.hasChildNodes()){
            searchList.removeChild(searchList.firstChild);
        }
    } else {
        //declarations
        var hitCounter = 0;
        var hits = [];
        var printouts = [];

        //if varType is high, search by pokedex number
        if (varType){
            for (var i in pokeNumbers){
                if (hitCounter < 20){
                    if (pokeNumbers[i].indexOf(query) > -1){
                        hits.push(i);
                        hitCounter++;
                    }
                }
            }

        //if varType is low, search by pokedex name
        } else {
            for (var i in pokeNames){
                if (hitCounter < 20){
                    if (pokeNames[i].indexOf(query) > -1){
                        hits.push(i);
                        hitCounter++;
                    }
                }
            }
        }
        /*Legacy search printout from lab1
        //translate the hits array of indices into the printout num+name 
        // if (hitCounter > 0){
        //     for (var i in hits){
        //         printouts.push(pokemon[hits[i]]);
        //     }
        //     alert("Is this what you're looking for?\n\n"+ printouts);
        // } else alert("No matches found!");
        */

        //populate the search results list
        var pFlavour = document.getElementById("lab2");
        var searchList = document.getElementById("searchResults");
        var br = document.createElement("br");

        while(searchList.hasChildNodes()){
            searchList.removeChild(searchList.firstChild);
        }
        if (hitCounter > 0){
            pFlavour.innerHTML = "Is this what you're looking for?\n\n";
            pFlavour.appendChild(br);
            //Reusing the code for the onLoad pageInit() function
            for (i in hits){
                //Allocating all information from the pokeDex dexEntry objects
                var searchLItem = document.createElement("li");
                var searchLNum = document.createElement("h2");
                searchLNum.innerHTML = ("#"+pokeDex[hits[i]].Numbers);
                var searchLName = document.createElement("h2");
                searchLName.innerHTML = pokeDex[hits[i]].Names;
                var searchLImg = document.createElement("img");
                searchLImg.setAttribute("src", pokeDex[hits[i]].Img);
                searchLImg.setAttribute("alt", pokeDex[i].Names);
                var searchLDesc = document.createElement("p");
                searchLDesc.innerHTML = pokeDex[hits[i]].Desc;
                var searchLTable = document.createElement("table");
                var searchLTableTr = document.createElement("tr");
                var searchLTableTd1 = document.createElement("td");
                searchLTableTd1.className = pokeDex[hits[i]].Type1;
                searchLTableTd1.innerHTML = pokeDex[hits[i]].Type1;
                var searchLTableTd2 = document.createElement("td");
                searchLTableTd2.className = pokeDex[hits[i]].Type2;
                searchLTableTd2.innerHTML = pokeDex[hits[i]].Type2;


                //Appending all information to the HTML
                searchLItem.appendChild(searchLNum);
                searchLItem.appendChild(searchLName);
                searchLItem.appendChild(searchLImg);
                searchLItem.appendChild(searchLDesc);
                searchLTableTr.appendChild(searchLTableTd1);
                searchLTableTr.appendChild(searchLTableTd2);
                searchLTable.appendChild(searchLTableTr);
                searchLItem.appendChild(searchLTable);

                //Final step add the newly made <li> to the existing <ul>
                searchList.appendChild(searchLItem);
            }
        //if no matches, alert the user
        } else {
            pFlavour.innerHTML = "No matches found!";
            pFlavour.appendChild(br);
        }
    }
}
