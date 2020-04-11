class Game {
    constructor(){
        this.wordsArray = ['keyboard', 'mouse', 'palmrest', 'monitor','ram','disc','drive','button','click','motherboard','graphic','cursor','software','hardware','javascript','window','program','charger','plugin','website','browser','node','computer','laptop','internet','youtube','instagram','facebook','java','database','development','engineer','coding','notebook','usb']
        this.answer = ""
        this.wrongGuessLimit = 10
        this.mistakes = 0
        this.guessedWords = []
        this.keyboardsletters = "abcdefghijklmnopqrstuvwxyz"
        this.keyboard = document.querySelector('.game__keyboard')
        this.wrongGuessLimitDisplay = document.querySelector('.game__wrongGuessLimit')
        // this.currentWord
        this.resetGameButton = document.querySelector('.game__reset')
        this.wordDisplay = document.querySelector('.game__word')
        this.wrongGuessDisplay = document.querySelector('.game__wrongGuesses')
        this.wordGenerator()
        this.keyboardGenerator()
        this.board()
        this.events()
        }

        events(){
            document.querySelector('body').addEventListener('click', event => {
                event.target.matches('.game__buttonLetter') ? this.handleGuess(event.target.id) : null
            });

            this.resetGameButton.addEventListener('click', () => this.resetGame())
        }

 
        wordGenerator(){
            this.answer = this.wordsArray[Math.floor(Math.random() * this.wordsArray.length)]
            console.log('answer :', this.answer);
        }


        keyboardGenerator(){
            let buttons = this.keyboardsletters.split('').map(letter => 
                `   
                    <button
                    class="game__buttonLetter"
                    id="${letter}"
                    >${letter}</button>
                
                `).join('')

            this.keyboard.innerHTML = buttons
            this.wrongGuessLimitDisplay.innerHTML = this.wrongGuessLimit
        }


        board(){
            this.currentWord = this.answer.split('').map(letter => (this.guessedWords.indexOf(letter) >= 0 ? letter : "_")).join('')
            this.wordDisplay.innerHTML = this.currentWord 
            this.wrongGuessDisplay.innerHTML = this.mistakes
        }


        handleGuess(letter){
            if(this.guessedWords.indexOf(letter) === -1){
                this.guessedWords.push(letter)
            }

            document.getElementById(`${letter}`).setAttribute('disabled', true)
           
            if(this.answer.indexOf(letter) >= 0){
                this.board()
                this.wonCheck()

            } else if(this.answer.indexOf(letter) === -1){
                this.mistakes = this.mistakes + 1
                this.wrongGuessDisplay.innerHTML = this.mistakes
                this.lostCheck()

            }
        }


        wonCheck(){

            this.currentWord === this.answer ? this.keyboard.innerHTML = "you win" : null
        }


        lostCheck(){
            if(this.mistakes === this.wrongGuessLimit){
                this.keyboard.innerHTML = "you lost"
                this.wordDisplay.innerHTML = 'The answer was: ' + this.answer
            }
        }


        resetGame(){
            this.mistakes = 0
            this.guessedWords = []
            this.wordGenerator()
            this.keyboardGenerator()
            this.board()
        }
    }

    
export default Game