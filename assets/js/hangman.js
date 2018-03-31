var words = ["dog", "horse", "alligator"];
var guesses = [];
var incorrectGuesses = [];
var correctGuesses = [];
$(document).ready(function () {
    $(document).keypress(function (event) {
        var key = event.originalEvent.key;
        
        // var testWord = words[Math.floor(words.length * Math.random())];
        var testWord = words[1];
        // var split = [];
        // split.push(testWord); // split adds the values in testWord to split[]
        var splitWord = testWord.split(''); // ["h", "o", "r", "s","e"];
        // split.push(splitWord);
        // console.log(split); // ["horse", ["h", "o", "r", "s","e"]];
        // for loop to check if keypress event is equal to any character in splitWord
        for ( i = 0; i < splitWord.length; i++) {
            
            var letter = splitWord[i];
            // letters.push(i);
            console.log(letter);
            if (key === letter) {
                correctGuesses.push(key);
                console.log(correctGuesses);
            };
            if (key != letter) {
                incorrectGuesses.push(key);
                console.log(incorrectGuesses);
            };
        };
        // check if keypress matches keys in word
        // if matches correctGuesses.push(event.originalEvent.key);
        // if doesnt match incorrectGuesses.push(event.originalEvent.key);
        guesses.push(key);
        // console.log(guesses);
        $("#guesses").append(key);


        var lossElement = document.getElementById("losses");
        if (incorrectGuesses.length >= 9) {
            guesses = [];
            lossElement.prepend("wow");
            $("#guesses").empty();

        };
        var winsElement = document.getElementById("wins");
        if (correctGuesses === words[1]) {
            guesses = [];
            winsElement.prepend("filler");
            $("#guesses").empty();
        }
    });
});

// log just incorrect keypress
// randomly select a word from words variable        math.random
// when a key is pressed check to see if that key is in the word
// if key is in the word, populate on page, if not add to incorrectguesses[]
