let winnerNum = Math.floor((Math.random()*20) + 1) ;
let win;
let score = 10;
let highScore;
let gameText = "¡Bienvenido, introduce un número para comenzar! 😉";
let lastNumber;

const inputDisplay = document.getElementById("inputDisp");
const scoreDisplay = document.getElementById("scoreDisp");
const hScoreDisplay = document.getElementById("hScoreDisp");
const againButton = document.getElementById("againBtn");
const textDisplay = document.getElementById("textDisp");
const sendButton = document.getElementById("sendBtn");


document.addEventListener("DOMContentLoaded", Start);

function Start(){
    scoreDisplay.textContent = score;
    hScoreDisplay.textContent = highScore;
    textDisplay.textContent = gameText;


    sendButton.addEventListener("click", sendNumber);
    againButton.addEventListener("click", restartGame);

}

function sendNumber(){
    let num = Number(inputDisplay.value);
    validateNumber(num);
    lastNumber = num;
    inputDisplay.value = "";
}

function restartGame(){
    document.querySelector(".main-container").style.backgroundColor = "#000000";
    let text = "Bien, comencemos de nuevo 😊";
    winnerNum = Math.floor((Math.random()*20) + 1) ;
    score = 10;
    lastNumber = 0;
    inputDisplay.value = "";
    updateScoreDisp(score);
    updateTextDisp(text);
    blockInput();
    
}

function validateNumber(number){
    let text = "";
    if (number) {
        if(number === winnerNum){
            win = true;
            changeBackground();
            showGif();
            blockInput();
            text = "Felicidades, haz ganado 🥳 Reinicia para jugar otra vez ";
            updateTextDisp(text);
            updateHScoreDisp(score);
        }else{
            if (score > 0){
                score-= 1;
                if(score === 0){
                    blockInput();
                    win = false;
                    text = "Has perdido 😥 Reinicia para volver a jugar";
                    updateTextDisp(text); 
                    updateScoreDisp(score);
                    changeBackground();
                }else{
                    displayText(number, winnerNum, lastNumber);
                    updateScoreDisp(score);
                }
            }
        }
    }else{
        text = "Solo puedes ingresar números... 🙄";
        updateTextDisp(text);
    }
}

function updateTextDisp(text){
    textDisplay.textContent = text;
}

function updateScoreDisp(score){
    scoreDisplay.textContent = "";
    scoreDisplay.textContent = score;
}

function updateHScoreDisp(score){
    if (!highScore){
        highScore = score;
        hScoreDisplay.textContent = "";
        hScoreDisplay.textContent = score;
    }else{
        if(score > highScore){
            highScore = score;
            hScoreDisplay.textContent = "";
            hScoreDisplay.textContent = score;
        }
    }
}

function blockInput(){
    if(!inputDisplay.readOnly == true && !sendButton.readOnly == true){
        inputDisplay.readOnly = true;
        sendButton.disabled = true;
    }else{
        inputDisplay.readOnly = false;
        sendButton.disabled = false;
    }
}

function displayText(num, winNum, lastNum){
    let text = "";
    if(num>=1 && num<=20){
        if(num === lastNum) {
            text = "¿Ingresaste el mismo número 🤔? Intenta con otro... "
            updateTextDisp(text); 
        }else if( num > winNum ){
            text = "Intenta con un número más bajo 😌";
            updateTextDisp(text); 
        } else {
            text = "Intenta con un número más alto 😌";
            updateTextDisp(text); 
        }
    }else {
        text = "Solo son números del 1 al 20... 😐"
        updateTextDisp(text); 
    }
}

function changeBackground(){
    if(win){
        document.querySelector(".main-container").style.backgroundColor = "#008000";
    }else{
        document.querySelector(".main-container").style.backgroundColor = "#4A0001";
    }
}

function showGif(){
    const gifContainer = document.getElementById("gifContainer");
    gifContainer.style.display = "flex";

    setTimeout(function(){
        closeGif();
    },5000);
}

function closeGif(){
    gifContainer.style.display = "none";
}

