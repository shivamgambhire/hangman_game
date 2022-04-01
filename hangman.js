
const hangman = function(word,remaningguess) {
    this.word = word.toLowerCase().split('')    //split the string into array using split method
    //console.log(this.word)
    this.remaningguess = remaningguess
    this.guessLetter = ['c','e']
}

hangman.prototype.getPuzzel = function(){
let puzzel = ''

this.word.forEach((letter) => {     //here the word containes array & we are performing loop over that array of string
        if(this.guessLetter.includes(letter) || letter == ' '){     //and conpainring the each letter with the guessletter
            puzzel = puzzel + letter
        }else{
            puzzel = puzzel + '*'
        }
})
return puzzel
}



const game1 = new hangman('Cat',2)
console.log(game1.getPuzzel())

const game2 = new hangman('New Delhi',4)
console.log(game2.getPuzzel())