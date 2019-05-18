var listofWords = ["coding","is","not","easy"];
var computerRandIndex = Math.floor(Math.random() *  listofWords.length);
var computerPickWord = listofWords[computerRandIndex];
var numberofGuessCount = 9;
var wrongGuessLetter = "";
var rightGuess = "";
var boardGame = [];
var wins = 0;
var losses = 0;
var userInput = "";
var displayBoardDiv = document.getElementById("output");


for( i=0; i < computerPickWord.length; i++){
    boardGame[i] = "*";
}   

document.getElementById("output").textContent=boardGame.join(" ");




document.onkeyup = function(event){
    userInput = event.key.toLowerCase();
    for( i=0; i < computerPickWord.length; i++){
        if(userInput == computerPickWord[i])
        {
                boardGame[i]=userInput;
                document.getElementById("output").textContent=boardGame.join(" ");
     
        }
       
    }   
    
}



