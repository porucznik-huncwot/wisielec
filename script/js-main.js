const clues = ["MONTE CASSINO", "SUKULENT", "IMIESŁÓW", "GOOGLE", "ŚWIETLÓWKA", "CHŁODNICA", "KABRIOLET", "ARNIKA GÓRSKA"];
const clueDiv = document.getElementById("clue-div");
const keyBoardDiv = document.getElementById("keyboard-div");
const alphabeth = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "R", "S", "Ś", "T", "U", "W", "Y", "Z", "Ź", "Ż"];
const clue = randomClue();
let clueCoded = "";
let mistakes = 0;

function randomClue() {
    return clues[Math.floor(Math.random() * clues.length)];
}

function keyboardGenerator() {
    let keybordContent = "";
    for (let i = 0; i < alphabeth.length; i++) {
        //keybordContent += '<div class="letter-button" id="letter-' + i + '" onclick="checkClue(' + i + ')">' + alphabeth[i] + '</div>';
        keybordContent += '<div class="key-div"> <div class="card" id="letter-' + i + '" onclick="checkClue(' + i + ')"> <div class="card-face card-front">' + alphabeth[i] + '</div> <div class="card-face card-back" id="letter-back-' + i + '">' + alphabeth[i] + '</div> </div> </div>'
    }

    keyBoardDiv.innerHTML = keybordContent;
}

String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function checkClue(letterIndex) {

    let isInClue = false;

    for (let i = 0; i < clue.length; i++) {
        if (clue[i] == alphabeth[letterIndex]) {
            clueCoded = clueCoded.substr(0, i) + alphabeth[letterIndex] + clueCoded.substr(i + 1);
            isInClue = true;
        }
    }
    clueDiv.innerHTML = clueCoded;

    if (isInClue) {
        const elementID = "letter-" + letterIndex;
        const element2ID = "letter-back-" + letterIndex;
        document.getElementById(element2ID).style.backgroundColor = "#ace8bb";
        document.getElementById(elementID).style.pointerEvents = "none";
        document.getElementById(elementID).classList.add("clicked-correct");
    }
    else {
        mistakes += 1;

        if(mistakes == 12){
            
        }
        
        if(mistakes == 1){
            step1();
        }
        else if(mistakes == 2){
            step2();
        }
        else if(mistakes == 3){
            step3();
        }
        else if(mistakes == 3){
            step3();
        }
        else if(mistakes == 4){
            step4();
            step5();
        }
        else if(mistakes == 5){
            step6();
        }
        else if(mistakes == 6){
            step7();
        }
        else if(mistakes == 7){
            step8();
        }
        else if(mistakes == 8){
            step9();
        }
        else if(mistakes == 9){
            step10();
        }
        else if(mistakes == 10){
            step11();
        }
        else if(mistakes == 11){
            step12();
        }


        const elementID = "letter-" + letterIndex;
        const element2ID = "letter-back-" + letterIndex;
        document.getElementById(element2ID).style.backgroundColor = "#f6b4b4";
        document.getElementById(elementID).style.pointerEvents = "none";
        document.getElementById(elementID).classList.add("clicked-incorrect");
    }
}


function startGame() {

    mistakes = 0;
    const titleDiv = document.getElementById("title-div");
    titleDiv.style.opacity = "0";

    setTimeout(() => {
        const titleDiv = document.getElementById("title-div");
        titleDiv.style.display = "none";
    }, 1500);

    console.log("testowo");

    for (let i = 0; i < clue.length; i++) {
        if (clue[i] == " ") { clueCoded += " "; }
        else { clueCoded += "-"; }
    }

    clueDiv.innerHTML = clueCoded;

    keyboardGenerator();
}

function fixTitle() {
    document.getElementById("start-button").style.pointerEvents = "all";
    const titleLetters = document.querySelectorAll(".title-letter");
    for (let i = 0; i < titleLetters.length; i++) {
        titleLetters[i].style.strokeDasharray = "0";
    }
}

setTimeout(fixTitle, 3700);
// startGame();