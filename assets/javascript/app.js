//  Game Mode Objects

var easyQuestions = {

    question1: {
        choices: [
            "1000",
            "100",
            "10",
            "10,000"
        ],
        correctAnswer: "1000",
        prompt: "How many meters are in a kilometer?"
    },

    question2: {
        choices: [
            "1000",
            "100",
            "10",
            "10,000"
        ],
        correctAnswer: "100",
        prompt: "How many centimeters are in a meter?"
    },

    question3: {
        choices: [
            "1000",
            "100",
            "10",
            "10,000"
        ],
        correctAnswer: "1000",
        prompt: "How many millimeters are in a meter?"
    },

    question4: {
        choices: [
            "100,000,000",
            "10,000",
            "1000",
            "1,000,000"
        ],
        correctAnswer: "1,000,000",
        prompt: "How many millimeters are in a kilometer?"
    },

};

var playMode = {};

$(".startButton").on("click", function () {
    playMode = easyQuestions;
    console.log(playMode);
});