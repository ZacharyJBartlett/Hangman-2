var words = ["dog", "horse", "alligator"];
var guesses = [];
var incorrectGuesses = [];
var correctGuesses = [];
$(document).ready(function () {
    $(document).keypress(function (event) {
        
        // check if keypress matches keys in word
        // if matches correctGuesses.push(event.originalEvent.key);
        // if doesnt match incorrectGuesses.push(event.originalEvent.key);
        guesses.push(event.originalEvent.key);
        console.log(guesses);
        $("#guesses").append(event.originalEvent.key);


        var lossElement = document.getElementById("losses");
        if (guesses.length >= 9) {
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
