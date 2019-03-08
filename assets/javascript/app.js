$(document).ready(function () {

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
            correctGif: "assets/images/gifs/cat-ruler.gif",
            incorrectGif: "assets/images/gifs/building-falling.gif",
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
            correctGif: "assets/images/gifs/nun-attack.gif",
            incorrectGif: "assets/images/gifs/building-falling.gif",
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
            correctGif: "assets/images/gifs/spin-ruler.gif",
            incorrectGif: "assets/images/gifs/building-falling.gif",
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
            correctGif: "assets/images/gifs/centimeter-crawl.gif",
            incorrectGif: "assets/images/gifs/building-falling.gif",
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
            correctGif: "assets/images/gifs/cat-ruler.gif",
            incorrectGif: "assets/images/gifs/building-falling.gif",
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
            correctGif: "assets/images/gifs/cat-ruler.gif",
            incorrectGif: "assets/images/gifs/building-falling.gif",
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
            correctGif: "assets/images/gifs/cat-ruler.gif",
            incorrectGif: "assets/images/gifs/building-falling.gif",
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
            correctGif: "assets/images/gifs/cat-ruler.gif",
            incorrectGif: "assets/images/gifs/building-falling.gif",
        },

    ];


    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var score = 0;

    var time = 10;
    var timeRunning = false;
    var currentIndex = 0;



    var playMode = {};

    // randomizes questions or answers

    function shuffle(sourceArray) {
        for (var i = 0; i < sourceArray.length - 1; i++) {
            var j = i + Math.floor(Math.random() * (sourceArray.length - i));

            var temp = sourceArray[j];
            sourceArray[j] = sourceArray[i];
            sourceArray[i] = temp;
        }
        return sourceArray;
    };

    // timed question change functions

    function countDown() {

        if (timeRunning === false) {
            time = 10;
            timeRunning = true;
            intervalId = setInterval(decrement, 1000);
        };
    };

    function decrement() {
        time--;

        $("#timer").html(time + " seconds")

        if (time === 0) {
            stop();
            unanswered++;
            time = 10;
            console.log("times up");
            endGame();
        }
    }

    function stop() {
        timeRunning = false;
        clearInterval(intervalId);
    }

    // show gifs after questions functions

    function showGif() {
        timedGif = setTimeOut(nextQuestion, 5000);
        $("#currentGif").html("<img src=" + playMode[currentIndex].correctGif + ">")
    }
    // goes to next question

    function newQuestion() {

        countDown();

        $("#timer").html("10 seconds")

        $("#currentQuestion").html(playMode[currentIndex].prompt);

        shuffle(playMode[currentIndex].choices);

        $("#ans1").html("<button class='ansButton list-group-item list-group-item-action'>" +
            playMode[currentIndex].choices[0] + "</button>");
        $("#ans2").html("<button class='ansButton list-group-item list-group-item-action'>" +
            playMode[currentIndex].choices[1] + "</button>");
        $("#ans3").html("<button class='ansButton list-group-item list-group-item-action'>" +
            playMode[currentIndex].choices[2] + "</button>");
        $("#ans4").html("<button class='ansButton list-group-item list-group-item-action'>" +
            playMode[currentIndex].choices[3] + "</button>");

        $("#currentGif").html("");

        console.log("Right Answer: " + playMode[currentIndex].correctAnswer);




        $(".ansButton").on("click", function () {

            var yourAnswer = this.innerHTML;
            console.log("Your Answer: " + yourAnswer);

            stop();

            if (yourAnswer === playMode[currentIndex].correctAnswer) {
                correct++;
            } else {
                incorrect++
            }



            console.log("right: " + correct + ",wrong: " + incorrect + ",unanswered: " + unanswered);
            $("#currentGif").html("<img src=" + playMode[currentIndex].correctGif + ">")

            $("#currentQuestion").html("");
            $("#ans1").html("");
            $("#ans2").html("");
            $("#ans3").html("");
            $("#ans4").html("");

            gifTimeout = setTimeout(function () {

                endGame();
            }, 5000);




        });

    }

    function endGame() {
        if (currentIndex < playMode.length - 1) {
            currentIndex++;
            console.log("currentIndex: " + currentIndex)
            newQuestion();
        } else {
            console.log("End Game")
            score = 100 * (correct / playMode.length) + "%";

            $("#playerScore").removeClass("d-none");
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            $("#unanswered").html(unanswered);
            $("#score").html(score);

            reset();
        };
    };

    function reset() {

        correct = 0;
        incorrect = 0;
        unanswered = 0;
        currentIndex = 0;

        $("#timer").html("");
        $("#currentQuestion").html("");

        $("#ans1").html("");
        $("#ans2").html("");
        $("#ans3").html("");
        $("#ans4").html("");

        $("#easyStartDiv").html('<button id="easyButton" type="button" class="startButton btn btn-primary">Easy</button>');
        $("#hardStartDiv").html('<button id="hardButton" type="button" class="startButton btn btn-primary">Hard</button>');
        console.log("reset");

        $("#currentGif").html("");

        $(".startButton").on("click", function () {
            var selection = this.id
            if (selection === "easyButton") {
                playMode = easyQuestions;
            } else if (selection === "hardButton") {
                playMode = hardQuestions;
            }

            playGame();
        });
    }

    reset();

    // Starts Game Mode

    $(".startButton").on("click", function () {
        var selection = this.id
        if (selection === "easyButton") {
            playMode = easyQuestions;
        } else if (selection === "hardButton") {
            playMode = hardQuestions;
        }

        playGame();
    });

    function playGame() {

        $("#timer").removeClass("d-none");
        $("#playerScore").addClass("d-none");
        $("#easyStartDiv").html("");
        $("#hardStartDiv").html("");

        console.log("Playing Game");

        shuffle(playMode);
        console.log(playMode);


        newQuestion();

    };

});


// end of game function