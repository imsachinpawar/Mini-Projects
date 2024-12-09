const questions = [
    {
        question: "which one from these is language for front-end?",
        answers: [
            { text: "html", correct: true },
            { text: "node", correct: false },
            { text: "express", correct: false },
            { text: "c++", correct: false },

        ]
    },
    {
        question: "which is smallest continent in world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    },
    {
        question: "which is language is server side?",
        answers: [
            { text: "Node", correct: true },
            { text: "html", correct: false },
            { text: "css", correct: false },
            { text: "Js", correct: false },
        ]
    },
    {
        question: "which is largest desert in the world?",
        answers: [
            { text: "kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "sahara", correct: false },
            { text: "Antarctica", correct: true },
        ]
    }
];

let questionElement = document.getElementById("question");
let answerButton = document.getElementById("answer-button");
let nextButton = document.getElementById("next-btn");

let currentQuestionIndex;
let Score;

function startQuiz() {
    currentQuestionIndex = 0;
    Score = 0;
    showQuestion();

}
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.question;
currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn")
    answerButton.appendChild(button);

})
}
startQuiz();