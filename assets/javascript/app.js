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
            correctGif: "cat-ruler.gif",
            incorrectGif: "fish-faint.gif",
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
            correctGif: "nun-attack.gif",
            incorrectGif: "mandm.gif",
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
            correctGif: "spin-ruler.gif",
            incorrectGif: "not-true.gif",
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
            correctGif: "centimeter-crawl.gif",
            incorrectGif: "paul-rudd.gif",
        },

        {
            prompt: "How many centimeters are in a kilometer?",
            correctAnswer: "100,000",
            choices: [
                "100,000",
                "10,000",
                "1000",
                "1,000,000"
            ],
            correctGif: "sailor-scouts.gif",
            incorrectGif: "throw-notebook.gif",
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
            correctGif: "centimeter-crawl.gif",
            incorrectGif: "paul-rudd.gif",
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
            correctGif: "dog-measuring.gif",
            incorrectGif: "idk-girl.gif",
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
            correctGif: "cheerleaders.gif",
            incorrectGif: "building-falling.gif",
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
            correctGif: "kid-thumbsup.gif",
            incorrectGif: "simba-nala.gif",
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
            correctGif: "shimmy.gif",
            incorrectGif: "trump-wrong.gif",
        },

        {
            prompt: "How many yards are in a mile?",
            correctAnswer: "1760",
            choices: [
                "1,760",
                "2,063",
                "2,280",
                "1,500"
            ],
            correctGif: "football.gif",
            incorrectGif: "basketball-fall.gif",
        },

        {
            prompt: "How many ounces are in a pound?",
            correctAnswer: "16",
            choices: [
                "16",
                "12",
                "20",
                "10"
            ],
            correctGif: "scale.gif",
            incorrectGif: "wide-eyes.gif",
        },

        {
            prompt: "How many pounds are in a ton?",
            correctAnswer: "2,000",
            choices: [
                "2,000",
                "1,600",
                "3,200",
                "1,440"
            ],
            correctGif: "wig-dancing.gif",
            incorrectGif: "side-eye.gif",
        },

        {
            prompt: "How many ounces are in a ton?",
            correctAnswer: "32,000",
            choices: [
                "32,000",
                "36,660",
                "20,000",
                "28,000"
            ],
            correctGif: "tracksuit-clapping.gif",
            incorrectGif: "scale-fall.gif",
        },

        {
            prompt: "How many teaspoons are in a tablespoon?",
            correctAnswer: "3",
            choices: [
                "3",
                "6",
                "4",
                "2"
            ],
            correctGif: "sugar.gif",
            incorrectGif: "more-sugar.gif",
        },

        {
            prompt: "How many tablespoon are in a fluid ounce?",
            correctAnswer: "2",
            choices: [
                "2",
                "3",
                "4",
                "7"
            ],
            correctGif: "liz-highfive.gif",
            incorrectGif: "obama.gif",
        },

    ];


    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var score = 0;
    var easyHighScore = "";
    var hardHighScore = "";

    var time = 10;
    var timeRunning = false;
    var currentIndex = 0;
    var gameStarted = false;
    var playingEasy = false;
    var playingHard = false;



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

            $("#currentQuestion").html("Out of Time!");
            $("#correctAnswer").html("The answer was " + playMode[currentIndex].correctAnswer);
            $("#currentGif").html("<img src='assets/images/gifs/times-up.gif'>")
            waitingPage();
        }
    }

    function stop() {
        timeRunning = false;
        clearInterval(intervalId);
    }

    // show gifs after questions functions

    function waitingPage() {

        $("#ans1").html("");
        $("#ans2").html("");
        $("#ans3").html("");
        $("#ans4").html("");

        gifTimeout = setTimeout(function () {
            endGame();
        }, 4000);
    }
    // goes to next question

    function newQuestion() {

        countDown();

        $("#timer").html("10 seconds")

        $("#currentQuestion").html(playMode[currentIndex].prompt);
        $("#correctAnswer").html("");

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
                $("#currentQuestion").html("Correct!");
                $("#currentGif").html("<img src='assets/images/gifs/" + playMode[currentIndex].correctGif + "'>")
            } else {
                incorrect++;
                $("#currentQuestion").html("Wrong!");
                $("#currentGif").html("<img src='assets/images/gifs/" + playMode[currentIndex].incorrectGif + "'>")
            }

            $("#correctAnswer").html("The answer was " + playMode[currentIndex].correctAnswer);

            console.log("right: " + correct + ",wrong: " + incorrect + ",unanswered: " + unanswered);

            waitingPage();

        });

    }

    function endGame() {
        if (currentIndex < playMode.length - 1) {
            currentIndex++;
            console.log("currentIndex: " + currentIndex)
            newQuestion();
        } else {
            console.log("End Game")
            score = Math.trunc(100 * (correct / playMode.length)) + "%";

            $("#correctAnswer").html("");
            $("#playerScore").removeClass("d-none");
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            $("#unanswered").html(unanswered);
            $("#score").html(score);

            if (playingEasy === true) {
                if (score > easyHighScore) {
                    easyHighScore = score;
                }
                $("#easyHighScore").html("High Score: " + easyHighScore);
                $("#hardHighScore").html("High Score: " + hardHighScore);
            } else if (playingHard === true) {
                if (score > hardHighScore) {
                    hardHighScore = score;
                }
                $("#easyHighScore").html("High Score: " + easyHighScore);
                $("#hardHighScore").html("High Score: " + hardHighScore);
            };
            reset();
        };
    };

    function reset() {

        correct = 0;
        incorrect = 0;
        unanswered = 0;
        currentIndex = 0;

        playingEasy = false;
        playingHard = false;

        $("#timer").html("");

        if (gameStarted === true) {
            $("#currentQuestion").html("");
        } else {
            $("#currentQuestion").html("Go ahead and see how well you know your measurements! Click either button below to play.");
        }

        $("#ans1").html("");
        $("#ans2").html("");
        $("#ans3").html("");
        $("#ans4").html("");

        $("#easyStartDiv").html('<button id="easyButton" type="button" class="startButton btn btn-primary">Easy</button>');
        $("#hardStartDiv").html('<button id="hardButton" type="button" class="startButton btn btn-primary">Hard</button>');
        console.log("reset");

        $("#currentGif").html("");

        $(".startButton").on("click", function () {

            $("#easyHighScore").html("");
            $("#hardHighScore").html("");

            var selection = this.id
            if (selection === "easyButton") {
                playMode = easyQuestions;
                playingEasy = true;
            } else if (selection === "hardButton") {
                playMode = hardQuestions;
                playingHard = true;
            }

            playGame();
        });
    }

    reset();

    // Starts Game Mode

    $(".startButton").on("click", function () {
        gameStarted = true;
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