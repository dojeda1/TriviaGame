$(document).ready(function () {



    //  Game Mode Objects

    var easyQuestions = [

        {
            prompt: "How many meters are in a kilometer?",
            correctAnswer: "1,000",
            choices: [
                "1,000",
                "100",
                "10",
                "10,000"
            ],
            abr: "m",
            correctGif: "cat-ruler.gif",
            incorrectGif: "chew-book.gif",
        },

        {
            prompt: "How many centimeters are in a meter?",
            correctAnswer: "100",
            choices: [
                "1,000",
                "100",
                "10",
                "10,000"
            ],
            abr: "cm",
            correctGif: "measuring-catch.gif",
            incorrectGif: "measuring-fall.gif",
        },

        {
            prompt: "How many millimeters are in a meter?",
            correctAnswer: "1,000",
            choices: [
                "1,000",
                "100",
                "10",
                "10,000"
            ],
            abr: "mm",
            correctGif: "spin-ruler.gif",
            incorrectGif: "not-true.gif",
        },

        {
            prompt: "How many millimeters are in a kilometer?",
            correctAnswer: "1,000,000",
            choices: [
                "100,000,000",
                "10,000",
                "1,000",
                "1,000,000"
            ],
            abr: "mm",
            correctGif: "rocket-launch.gif",
            incorrectGif: "rocket-explode.gif",
        },

        {
            prompt: "How many centimeters are in a kilometer?",
            correctAnswer: "100,000",
            choices: [
                "100,000",
                "10,000",
                "1,000",
                "1,000,000"
            ],
            abr: "cm",
            correctGif: "centimeter-crawl.gif",
            incorrectGif: "paul-rudd.gif",
        },


        {
            prompt: "How many milligrams are in a metric ton?",
            correctAnswer: "1,000,000,000",
            choices: [
                "1,000,000,000",
                "10,000",
                "1,000",
                "1,000,000"
            ],
            abr: "mg",
            correctGif: "papers-flying.gif",
            incorrectGif: "throw-notebook.gif",
        },

        {
            prompt: "How many milligrams are in a gram?",
            correctAnswer: "1,000",
            choices: [
                "1,000",
                "100",
                "1,000,000",
                "10"
            ],
            abr: "mg",
            correctGif: "mixer-win.gif",
            incorrectGif: "mixer-fail.gif",
        },

        {
            prompt: "How many grams are in a kilogram?",
            correctAnswer: "1,000",
            choices: [
                "1,000",
                "100",
                "1,000,000",
                "10"
            ],
            abr: "g",
            correctGif: "kid-thumbsup.gif",
            incorrectGif: "wrong-note.gif",
        },

        {
            prompt: "How many kilograms are in a metric ton?",
            correctAnswer: "1,000",
            choices: [
                "1,000",
                "100",
                "1,000,000",
                "10"
            ],
            abr: "kg",
            correctGif: "elephant-ribbon.gif",
            incorrectGif: "elephant-fall.gif",
        },

        {
            prompt: "How many milligrams are in a kilogram?",
            correctAnswer: "1,000,000",
            choices: [
                "1,000",
                "100",
                "1,000,000",
                "10"
            ],
            abr: "mg",
            correctGif: "hangover-cards.gif",
            incorrectGif: "confused-girl.gif",
        },

        {
            prompt: "How many milliliters are in a liter?",
            correctAnswer: "1,000",
            choices: [
                "100,000",
                "10,000",
                "1,000",
                "1,000,000"
            ],
            abr: "ml",
            correctGif: "water-win.gif",
            incorrectGif: "water-fail.gif",
        },

        {
            prompt: "How many liters are in a kiloliter?",
            correctAnswer: "1,000",
            choices: [
                "100,000",
                "10,000",
                "1,000",
                "100"
            ],
            abr: "l",
            correctGif: "waterfall.gif",
            incorrectGif: "puddle.gif",
        },

        {
            prompt: "What is the freezing point of water in degrees Celsius?",
            correctAnswer: "0",
            choices: [
                "0",
                "100",
                "-10",
                "50"
            ],
            abr: "&deg;C",
            correctGif: "freezing-bulb.gif",
            incorrectGif: "in-ice.gif",
        },

        {
            prompt: "What is the boiling point of water in degrees Celsius?",
            correctAnswer: "100",
            choices: [
                "100",
                "200",
                "50",
                "80"
            ],
            abr: "&deg;C",
            correctGif: "chili.gif",
            incorrectGif: "turkey-fire.gif",
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
            abr: "ft",
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
            abr: "in",
            correctGif: "building-create.gif",
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
            abr: "ft",
            correctGif: "nun-sing.gif",
            incorrectGif: "nun-attack.gif",
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
            abr: "in",
            correctGif: "know-everything.gif",
            incorrectGif: "trump-wrong.gif",
        },

        {
            prompt: "How many yards are in a mile?",
            correctAnswer: "1,760",
            choices: [
                "1,760",
                "2,063",
                "2,280",
                "1,500"
            ],
            abr: "yd",
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
            abr: "oz",
            correctGif: "scale.gif",
            incorrectGif: "scale-fall.gif",
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
            abr: "lbs",
            correctGif: "fridge.gif",
            incorrectGif: "drop-weights.gif",
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
            abr: "oz",
            correctGif: "shimmy.gif",
            incorrectGif: "wide-eyes.gif",
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
            abr: "tsp",
            correctGif: "sugar-spoon.gif",
            incorrectGif: "more-sugar.gif",
        },

        {
            prompt: "How many tablespoons are in a fluid ounce?",
            correctAnswer: "2",
            choices: [
                "2",
                "3",
                "4",
                "7"
            ],
            abr: "tbsp",
            correctGif: "cute-wink.gif",
            incorrectGif: "obama.gif",
        },

        {
            prompt: "How many fluid ounces are in a cup?",
            correctAnswer: "8",
            choices: [
                "8",
                "16",
                "12",
                "4"
            ],
            abr: "fl oz",
            correctGif: "measure-cup.gif",
            incorrectGif: "spaghetti-full.gif",
        },

        {
            prompt: "How many cups are in a pint?",
            correctAnswer: "2",
            choices: [
                "8",
                "4",
                "5",
                "2"
            ],
            abr: "c",
            correctGif: "britney-cake.gif",
            incorrectGif: "cake-hand.gif",
        },

        {
            prompt: "How many pints are in a quart?",
            correctAnswer: "2",
            choices: [
                "12",
                "4",
                "3",
                "2"
            ],
            abr: "pt",
            correctGif: "beer.gif",
            incorrectGif: "beer-fail.gif",
        },

        {
            prompt: "How many quarts are in a gallon?",
            correctAnswer: "4",
            choices: [
                "8",
                "4",
                "3",
                "2"
            ],
            abr: "qt",
            correctGif: "drink-milk.gif",
            incorrectGif: "milk-fail.gif",
        },

        {
            prompt: "What is the freezing point of water in degrees Fahrenheit?",
            correctAnswer: "32",
            choices: [
                "32",
                "0",
                "40",
                "12"
            ],
            abr: "&deg;F",
            correctGif: "ice-tower.gif",
            incorrectGif: "ice-falling.gif",
        },

        {
            prompt: "What is the boiling point of water in degrees Fahrenheit?",
            correctAnswer: "212",
            choices: [
                "212",
                "180",
                "100",
                "150"
            ],
            abr: "&deg;F",
            correctGif: "happy-kettle.gif",
            incorrectGif: "drop-kettle.gif",
        },


    ];

    var outOfTimeGifs = ["death-star.gif", "independence.gif", "woman-phone.gif", "judy.gif", "time-for-that.gif", "siren.gif", "reggie.gif", "hourglass.gif", "clocks.gif"]

    // global variables

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var score = 0;
    var scorePercent = ""
    var easyHighScore = -1;
    var easyHighScorePercent = "";
    var hardHighScore = -1;
    var hardHighScorePercent = "";
    var questionCount = 0;

    var time = 10;
    var timeRunning = false;
    var currentIndex = 0;
    var gameStarted = false;
    var playingEasy = false;
    var playingHard = false;

    var playMode = {};

    console.log("Easy Q# " + easyQuestions.length);
    console.log("Hard Q# " + hardQuestions.length);

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

            $("#currentQuestion").html("<span class='text-warning'>Out of Time!</span>");
            $("#correctAnswer").html("The answer was " + playMode[currentIndex].correctAnswer);

            var randNum = Math.floor(Math.random() * outOfTimeGifs.length);
            console.log(randNum);

            $("#currentGif").html("<img src='assets/images/gifs/" + outOfTimeGifs[randNum] + "'>")
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

        $("img").on("click", function () {
            clearTimeout(gifTimeout);
            console.log("clear timeout")
            endGame();
        });
    }
    // goes to next question

    function newQuestion() {

        countDown();

        $("#timer").html("10 seconds")

        $("#currentQuestion").html(playMode[currentIndex].prompt);
        $("#correctAnswer").html("");

        shuffle(playMode[currentIndex].choices);

        for (i = 0; i < playMode[currentIndex].choices.length; i++) {
            $("#ans1").append("<button class='ansButton list-group-item list-group-item-action' answer='" + playMode[currentIndex].choices[i] + "'>" +
                playMode[currentIndex].choices[i] + "<span class='text-60'> " + playMode[currentIndex].abr + "</span></button>");

        }
        $("#currentGif").html("");

        questionCount++;
        $("#questionCount").html("Question " + questionCount + " of " + playMode.length);

        console.log(playMode[currentIndex].prompt)
        console.log("Right Answer: " + playMode[currentIndex].correctAnswer);




        $(".ansButton").on("click", function () {
            console.log(this);
            var yourAnswer = $(this).attr('answer');
            console.log("Your Answer: " + yourAnswer);


            stop();

            if (yourAnswer === playMode[currentIndex].correctAnswer) {
                correct++;
                $("#currentQuestion").html("<span class='text-warning'>Correct!</span>");
                $("#currentGif").html("<img src='assets/images/gifs/" + playMode[currentIndex].correctGif + "'>")
            } else {
                incorrect++;
                $("#currentQuestion").html("<span class='text-warning'>Wrong!</span>");
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

            score = correct / playMode.length
            scorePercent = Math.trunc(100 * (score)) + "%";

            $("#correctAnswer").html("");
            $("#playerScore").removeClass("d-none");
            $("#correct").html(correct);
            $("#incorrect").html(incorrect);
            $("#unanswered").html(unanswered);
            $("#score").html(scorePercent);
            $("#questionCount").html("");

            if (playingEasy === true) {
                if (score > easyHighScore) {
                    easyHighScore = score;
                    easyHighScorePercent = scorePercent;
                    console.log("score: " + score);
                    console.log("Escore: " + easyHighScore)

                    $("#easyHighScore").html("<span class='text-warning'>New High Score: " + easyHighScorePercent) + "</span>";
                    $("#hardHighScore").html("High Score: " + hardHighScorePercent);
                } else {
                    console.log("not a high score")

                    $("#easyHighScore").html("High Score: " + easyHighScorePercent);
                    $("#hardHighScore").html("High Score: " + hardHighScorePercent);

                }
            } else if (playingHard === true) {
                if (score > hardHighScore) {
                    hardHighScore = score;
                    hardHighScorePercent = scorePercent;
                    console.log("score: " + score);
                    console.log("Hscore: " + hardHighScore)

                    $("#easyHighScore").html("High Score: " + easyHighScorePercent);
                    $("#hardHighScore").html("<span class='text-warning'>New High Score: " + hardHighScorePercent + "</span>");

                } else {
                    console.log("not a high score")

                    $("#easyHighScore").html("High Score: " + easyHighScorePercent);
                    $("#hardHighScore").html("High Score: " + hardHighScorePercent);

                }

            };
            reset();
        };
    };

    function reset() {

        correct = 0;
        incorrect = 0;
        unanswered = 0;
        currentIndex = 0;
        questionCount = 0;

        playingEasy = false;
        playingHard = false;

        $("#timer").html("");

        if (gameStarted === true) {
            $("#currentQuestion").html("");
        } else {
            $("#currentQuestion").html("How well do you know your measurements? Click either button below to play!");
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