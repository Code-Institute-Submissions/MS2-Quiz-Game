const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
console.log(choices);

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "what is the capital of brazil?",
    choice1: "buenos aires",
    choice2: "sao paolo",
    choice3: "brasilia",
    choice4: "rio de janeiro",
    answer: 2,
  },
  {
    question: "what is the root square of 144?",
    choice1: "11'>",
    choice2: "12'>",
    choice3: "13'>",
    choice4: "14",
    answer: 1,
  },
  {
    question: " what is the drinking aga in portugal",
    choice1: "18;",
    choice2: "21",
    choice3: "16",
    choice4: "50",
    answer: 1,
  },
  {
    question: "what color is not on the ecuador flag",
    choice1: "red",
    choice2: "green",
    choice3: "blue",
    choice4: "yellow",
    answer: 1,
  },
];
