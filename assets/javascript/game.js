var listofWords = ["istillworkingonthisgame", "developer", "coding"];
var computerRandIndex = Math.floor(Math.random() *  listofWords.length);
var computerPickWord = listofWords[computerRandIndex];
var numberofGuessCount = 9;
var wrongGuessLetter = "";
var rightGuess = "";
var boardGame = [];
var wins = 0;
var losses = 0;
var userInput = "";

for( i=0; i < computerPickWord.length; i++){
    boardGame[i] = "_";
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



// var displayBoardDiv = document.getElementById("output");
// displayBoardDiv.textContent = userInput;

// if(computerPickWord.indexOf(userInput)> -1 ) {
//     boardGame[computerPickWord.indexOf(userInput)]=userInput;
//     displayBoard.textContent= boardGame.join(""); 
//     rightGuessLetter = rightGuessLetter + userInput;

//     if(computerPickWord=== rightGuessLetter){
//         wins++;


// document.onkeyup = function(event){
//     userInput = event.key.toLowerCase();
//   alert(userInput);
//  } 