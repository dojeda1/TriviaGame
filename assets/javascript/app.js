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

var hardQuestions = {

    question1: {
        choices: [
            "5280",
            "3560",
            "2000",
            "4960"
        ],
        correctAnswer: "5280",
        prompt: "How many feet are in a mile?"
    },

    question2: {
        choices: [
            "12",
            "18",
            "10",
            "8"
        ],
        correctAnswer: "12",
        prompt: "How many inches are in a foot?"
    },

    question3: {
        choices: [
            "3",
            "4",
            "5",
            "8"
        ],
        correctAnswer: "3",
        prompt: "How many feet are in a yard?"
    },

    question4: {
        choices: [
            "63,360",
            "82,600",
            "44,720",
            "52,000"
        ],
        correctAnswer: "63,360",
        prompt: "How many inches are in a mile?"
    },

};

var playMode = {};

$(".startButton").on("click", function () {
    playMode = easyQuestions;
    console.log(playMode);
});