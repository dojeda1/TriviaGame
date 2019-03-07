//  Game Mode Objects

var easyQuestions = [

    {
        prompt: "How many meters are in a kilometer?",
        correctAnswer: "1000",
        choices: [
            "1000",
            "100",
            "10",
            "10,000"
        ],
    },

    {
        prompt: "How many centimeters are in a meter?",
        correctAnswer: "100",
        choices: [
            "1000",
            "100",
            "10",
            "10,000"
        ],
    },

    {
        prompt: "How many millimeters are in a meter?",
        correctAnswer: "1000",
        choices: [
            "1000",
            "100",
            "10",
            "10,000"
        ],
    },

    {
        prompt: "How many millimeters are in a kilometer?",
        correctAnswer: "1,000,000",
        choices: [
            "100,000,000",
            "10,000",
            "1000",
            "1,000,000"
        ],
    },

];

var hardQuestions = [

    {
        prompt: "How many feet are in a mile?",
        correctAnswer: "5280",
        choices: [
            "5280",
            "3560",
            "2000",
            "4960"
        ],
    },

    {
        prompt: "How many inches are in a foot?",
        correctAnswer: "12",
        choices: [
            "12",
            "18",
            "10",
            "8"
        ],
    },

    {
        prompt: "How many feet are in a yard?",
        correctAnswer: "3",
        choices: [
            "3",
            "4",
            "5",
            "8"
        ],
    },

    {
        prompt: "How many inches are in a mile?",
        correctAnswer: "63,360",
        choices: [
            "63,360",
            "82,600",
            "44,720",
            "52,000"
        ],
    },

];
console.log(hardQuestions);

var correct = 0;
var incorrect = 0;

var playMode = {};

function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
};

function playGame() {

    correct = 0;
    incorrect = 0;

    console.log("Playing Game");

    shuffle(playMode);
    console.log(playMode);



    $("#currentQuestion").html(playMode[0].prompt);

    shuffle(playMode[0].choices);

    $("#ans1").html(playMode[0].choices[0]);
    $("#ans2").html(playMode[0].choices[1]);
    $("#ans3").html(playMode[0].choices[2]);
    $("#ans4").html(playMode[0].choices[3]);
    console.log(playMode[0].correctAnswer);

    $(".ansButton").on("click", function () {

        var yourAnswer = this.innerHTML;
        console.log(yourAnswer);

        if (yourAnswer === playMode[0].correctAnswer) {
            correct++;
        } else {
            incorrect++
        }

        console.log("right: " + correct + ",wrong: " + incorrect)
    });


};

$(".startButton").on("click", function () {
    var selection = this.id
    if (selection === "easyButton") {
        playMode = easyQuestions;
    } else if (selection === "hardButton") {
        playMode = hardQuestions;
    }
    console.log(playMode);
    playGame();
});


// end of game function