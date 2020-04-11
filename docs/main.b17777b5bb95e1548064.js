!function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(0);function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wordsArray=["keyboard","mouse","palmrest","monitor","ram","disc","drive","button","click","motherboard","graphic","cursor","software","hardware","javascript","window","program","charger","plugin","website","browser","node","computer","laptop","internet","youtube","instagram","facebook","java","database","development","engineer","coding","notebook","usb"],this.answer="",this.wrongGuessLimit=10,this.mistakes=0,this.guessedWords=[],this.keyboardsletters="abcdefghijklmnopqrstuvwxyz",this.keyboard=document.querySelector(".game__keyboard"),this.wrongGuessLimitDisplay=document.querySelector(".game__wrongGuessLimit"),this.resetGameButton=document.querySelector(".game__reset"),this.wordDisplay=document.querySelector(".game__word"),this.wrongGuessDisplay=document.querySelector(".game__wrongGuesses"),this.wordGenerator(),this.keyboardGenerator(),this.board(),this.events()}var t,r,s;return t=e,(r=[{key:"events",value:function(){var e=this;document.querySelector("body").addEventListener("click",(function(t){t.target.matches(".game__buttonLetter")&&e.handleGuess(t.target.id)})),this.resetGameButton.addEventListener("click",(function(){return e.resetGame()}))}},{key:"wordGenerator",value:function(){this.answer=this.wordsArray[Math.floor(Math.random()*this.wordsArray.length)],console.log("answer :",this.answer)}},{key:"keyboardGenerator",value:function(){var e=this.keyboardsletters.split("").map((function(e){return'   \n                    <button\n                    class="game__buttonLetter"\n                    id="'.concat(e,'"\n                    >').concat(e,"</button>\n                \n                ")})).join("");this.keyboard.innerHTML=e,this.wrongGuessLimitDisplay.innerHTML=this.wrongGuessLimit}},{key:"board",value:function(){var e=this;this.currentWord=this.answer.split("").map((function(t){return e.guessedWords.indexOf(t)>=0?t:"_"})).join(""),this.wordDisplay.innerHTML=this.currentWord,this.wrongGuessDisplay.innerHTML=this.mistakes}},{key:"handleGuess",value:function(e){-1===this.guessedWords.indexOf(e)&&this.guessedWords.push(e),document.getElementById("".concat(e)).setAttribute("disabled",!0),this.answer.indexOf(e)>=0?(this.board(),this.wonCheck()):-1===this.answer.indexOf(e)&&(this.mistakes=this.mistakes+1,this.wrongGuessDisplay.innerHTML=this.mistakes,this.lostCheck())}},{key:"wonCheck",value:function(){this.currentWord===this.answer&&(this.keyboard.innerHTML="you win")}},{key:"lostCheck",value:function(){this.mistakes===this.wrongGuessLimit&&(this.keyboard.innerHTML="you lost",this.wordDisplay.innerHTML="The answer was: "+this.answer)}},{key:"resetGame",value:function(){this.mistakes=0,this.guessedWords=[],this.wordGenerator(),this.keyboardGenerator(),this.board()}}])&&n(t.prototype,r),s&&n(t,s),e}())}]);