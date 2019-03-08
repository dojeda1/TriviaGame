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


    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    var time = 15;
    var timeRunning = false;
    var currentIndex = 0;



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

    function countDown() {
        intervalId = setInterval(decrement, 1000);
    };

    function decrement() {
        time--;

        $("#timer").html(time + " seconds")

        if (time === 0) {
            stop();
            unanswered++;
            time = 15;
            console.log("times up");
        }
    }

    function stop() {
        clearInterval(intervalId);
    }

    function displayQuestion() {

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
        console.log("Right Answer: " + playMode[currentIndex].correctAnswer);

        $(".ansButton").on("click", function () {

            var yourAnswer = this.innerHTML;
            console.log("Your Answer: " + yourAnswer);

            if (yourAnswer === playMode[currentIndex].correctAnswer) {
                correct++;
            } else {
                incorrect++
            }

            console.log("right: " + correct + ",wrong: " + incorrect + ",unanswered: " + unanswered);

            currentIndex++;
            console.log("currentIndex: " + currentIndex)

            if (currentIndex < playMode.length) {
                displayQuestion();
            } else {
                console.log("End Game")

                $("#playerScore").removeClass("d-none");
                $("#correct").html(correct);
                $("#incorrect").html(incorrect);
                $("#unanswered").html(unanswered);
                reset();


            }
        });

    }

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

        // countDown();

        console.log("Playing Game");

        shuffle(playMode);
        console.log(playMode);


        displayQuestion();









    };

});


// end of game function