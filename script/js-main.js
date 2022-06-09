const clues = ["MONTE CASSINO", "SUKULENT", "IMIESŁÓW", "ŚWIETLÓWKA", "CHŁODNICA", "KABRIOLET", "ARNIKA GÓRSKA", "SPÓŁGŁOSKA", "KOSODRZEWINA", "CHRZĄSZCZ", "INTERPUNKCJA", "JEDNOMASZTOWIEC", "MOTOCYKL"];
const clueDiv = document.getElementById("clue-div");
const keyBoardDiv = document.getElementById("keyboard-div");
const svgImage = document.getElementById("svg-img");
const batteryLifes = document.getElementById("battery-lifes").children;
const alphabeth = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "R", "S", "Ś", "T", "U", "W", "Y", "Z", "Ź", "Ż"];
let clue = randomClue();
let clueCoded = "";
let mistakes = 0;

function randomClue() {
    return clues[Math.floor(Math.random() * clues.length)];
}

function keyboardGenerator() {
    let keybordContent = "";
    for (let i = 0; i < alphabeth.length; i++) {
        keybordContent += '<div class="key-div"> <div class="card" id="letter-' + i + '" onclick="checkClue(' + i + ')"> <div class="card-face card-front">' + alphabeth[i] + '</div> <div class="card-face card-back" id="letter-back-' + i + '">' + alphabeth[i] + '</div> </div> </div>'
    }

    keyBoardDiv.innerHTML = keybordContent;
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

    if(clueCoded == clue){
        winnig();
    }

    if (isInClue) {
        const elementID = "letter-" + letterIndex;
        const element2ID = "letter-back-" + letterIndex;
        document.getElementById(element2ID).style.backgroundColor = "#ace8bb";
        document.getElementById(elementID).style.pointerEvents = "none";
        document.getElementById(elementID).classList.add("clicked-correct");
    }
    else {
        mistakes += 1;
        // console.log("miatakes = " + mistakes);
        batteryLifes[11-mistakes].style.opacity = "0";

        const elementID = "letter-" + letterIndex;
        const element2ID = "letter-back-" + letterIndex;
        document.getElementById(element2ID).style.backgroundColor = "#f6b4b4";
        document.getElementById(elementID).style.pointerEvents = "none";
        document.getElementById(elementID).classList.add("clicked-incorrect");

        if(mistakes == 11){
            step12();

            const childs = keyBoardDiv.children;

            for(let i=0; i<childs.length; i++){
                childs[i].style.pointerEvents = "none";
            }

            setTimeout(() => {
                losing();
            }, 2000);
            return;
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
    }
}


function startGame() {

    clearClasses();

    clue = randomClue();
    clueCoded = "";
    mistakes = 0;
    const titleDiv = document.getElementById("title-div");
    document.getElementById("start-button").style.pointerEvents = "none";
    titleDiv.style.opacity = "0";

    setTimeout(() => {
        const titleDiv = document.getElementById("title-div");
        titleDiv.style.display = "none";
    }, 1500);

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

function winnig(){
    const titleDiv = document.getElementById("title-div");
    const startButton = document.getElementById("start-button");
    const winTitle = document.getElementById("win-title");
    const defeatTitle = document.getElementById("defeat-title");

    defeatTitle.innerHTML = "HASŁO TO: " + "<b>" + clue + "</b>";

    document.getElementById("title").style.display = "none";
    startButton.style.animationDelay = "1.8s"
    winTitle.style.animationDelay = "1.2s"
    startButton.textContent = "JESZCZE RAZ";
    winTitle.textContent = "WYGRANA!";
    startButton.style.pointerEvents = "all";
    // startButton.style.width = "30%";
    // startButton.style.height = "120px";
    startButton
    titleDiv.style.display = "flex";
    winTitle.style.display = "flex";
    defeatTitle.style.display = "flex";

    setTimeout(() => {
        titleDiv.style.opacity = "1";
    }, 500);
}

function losing(){
    const titleDiv = document.getElementById("title-div");
    const startButton = document.getElementById("start-button");
    const winTitle = document.getElementById("win-title");
    const defeatTitle = document.getElementById("defeat-title");

    defeatTitle.innerHTML = "HASŁO TO: " + "<b>" + clue + "</b>";

    document.getElementById("title").style.display = "none";
    startButton.style.animationDelay = "1.8s"
    winTitle.style.animationDelay = "1.2s"
    defeatTitle.style.animationDelay = "1.2s";
    startButton.textContent = "JESZCZE RAZ";
    winTitle.textContent = "PRZEGRANA!";
    startButton.style.pointerEvents = "all";
    // startButton.style.width = "30%";
    // startButton.style.height = "120px";
    titleDiv.style.display = "flex";
    winTitle.style.display = "flex";
    defeatTitle.style.display = "flex";

    setTimeout(() => {
        titleDiv.style.opacity = "1";
    }, 500);
}

setTimeout(fixTitle, 3700);