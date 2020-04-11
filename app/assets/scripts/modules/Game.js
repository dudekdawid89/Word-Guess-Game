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
        this.currentWord
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
            this.wrongGuessDisplay.innerHTML = this.mistakes
        }

        board(){
            this.currentWord = this.answer.split('').map(letter => (this.guessedWords.indexOf(letter) >= 0 ? letter : "_")).join(' ')
            this.wordDisplay.innerHTML = this.currentWord
            
        }

        handleGuess(letter){
            if(this.guessedWords.indexOf(letter) === -1){
                this.guessedWords.push(letter)
                
                this.wrongGuessDisplay.innerHTML = this.guessedWords.length
                
                console.log('this.guessedWords :', this.guessedWords.length);
            }
            document.getElementById(`${letter}`).setAttribute('disabled', true)
           

            if(this.answer.indexOf(letter) >= 0){
                console.log('this.answer.indexOf(letter) :', this.answer.indexOf(letter));
                this.board()
            }      
        }
    }

    

export default Game