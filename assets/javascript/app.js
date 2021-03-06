// Variables - Q C & A Arrays

var randomQuestions = [{
    question: "Which sea creature has three hearts?",
    choices: ["  Shark  ", "  Octopus  ", "  Humpback Whale  ", "  Shrimp  "],
    answer: 1,
},
{
    question: "How many bones does an adult human have?",
    choices: ["  300  ", "  99  ", "  138  ", "  206  "],
    answer: 3,
},
{
    question: "What is the Italian word for pie?",
    choices: ["  Pizza  ", "  Alici  ", "  Bere  ", "  Capra  "],
    answer: 0,
},
{
    question: "What was Marilyn Monroe's natural hair colour?",
    choices: ["  Honey Blonde  ", "  Brunette  ", "  Ginger  ", "  Dark Blonde  "],
    answer: 2,
},
{
    question: "Name the port of Rome.",
    choices: ["  Ostia  ", "  Ravena  ", "  Gioia Tauro  ", "  Messina  "],
    answer: 0,
},
{
    question: "Who sang about being an eggman and a walrus?",
    choices: ["  Elvis  ", "  Cher  ", "  The Beatles  ", "  Michael Jackson  "],
    answer: 2,
},
{
    question: "When did the French Revolution end?",
    choices: ["  1898  ", "  1900  ", "  1799  ", "  1805  "],
    answer: 2,
},
{
    question: " Which Russian town suffered an infamous nuclear disaster in 1986?",
    choices: ["  Chernobyl  ", "  Moscow  ", "  Kazan  ", "  Samara  "],
    answer: 0,
},
];
//Test for array
console.log(randomQuestions)

// Variables - Scores & Counter
var score = 0;
var counter = 30;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 8;
var timer;

//Start button
$(".container").hide();
$("#start").click(function () {
    $(this).hide();
    clearInterval(timer)
    $(".container").show();
})

//Done button
$("#done").click(function () {
    $(this).hide()
    clearInterval(timer)
    endGame(correctAnswers, incorrectAnswers, unanswered, score);
})

// Display Question & Choices
for (var i = 0; i < randomQuestions.length; i++) {
    $("#questionArea").append(`<br><h5><strong>${randomQuestions[i].question}</strong></h5>`);
    for (var j = 0; j < randomQuestions[i].choices.length; j++) {

        $("#questionArea").append(`<input type="radio" name="question${i}" questionNumber=${i} value="${randomQuestions[i].choices[j]}" correctAnswer=${randomQuestions[i].answer} class='answers'>${randomQuestions[i].choices[j]}<br>`)
    }
}
//Shows total score, correct, incorrect answers and unanswered
function endGame(correctAnswers, incorrectAnswers, unanswered, score) {
    $("#counter").hide();
    $("#score").show();
    $("#done").hide();
    $("#questionArea").hide();
    $("#score").text(`Your score is ${score}`);
    $("#correctAnswers").text(`Correct Answers: ${correctAnswers}`);
    $("#incorrectAnswers").text(`Incorrect Answers: ${incorrectAnswers}`);
    var unansweredTotal = unanswered - correctAnswers - incorrectAnswers;
    $("#unanswered").text(`Unanswered: ${unansweredTotal}`);
}

// Creating Timer to answer questions. Providing option to play the game again.
setTimeout(function (timer) {
     timer = setInterval(() => {
        counter--;
        $("#counter").text(`You have ${counter} seconds.`)
        if (counter == 0) {
            clearInterval(timer)
            endGame(correctAnswers, incorrectAnswers, unanswered, score);
        }
    }, 1000);
    // Delay for timer to start
}, 1);

var collection = [];

// On click function for answer whether True or False (Adding to Score if Correct)

$(document).on("click", ".answers", function () {
    var userPick = $(this).attr("value")
    var questionNumber = $(this).attr("questionNumber")
    var correctAnswer = $(this).attr("correctAnswer")
    if (collection.indexOf(userPick) == -1 ){
        collection.push(userPick)
        if (userPick == randomQuestions[questionNumber].choices[correctAnswer]) {
            correctAnswers++;
            score++;
            console.log("you're right!")
        } else {
            incorrectAnswers++;
            console.log("you're wrong!")
        }
    }
    

})
