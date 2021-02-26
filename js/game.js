/*jshint esversion: 6 */

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById("score");

let   getNewQuestion = {};
let   acceptingAnswers = {};
let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [];


function GetAPI(e) {
    const data = null;

    const xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true;

    xhttp.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
           
        questions = JSON.parse(this.responseText).results;
    console.log("questions", questions);    
    startGame();
    }
        
    });

    xhttp.open("GET", "https://my-json-server.typicode.com/Federvgh%20/MS2-Quiz-Game/db");

    xhttp.send();
}

//Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    var elems = document.querySelectorAll(".choice-text");
    [].forEach.call(elems, function(el) {
            el.classList.remove("hide");
    });
    
    getNewQuestion();
    
    };
//Redirect to End page when there are no more questions //
    getNewQuestion = () => {
    if(availableQuesions.length === 0 || questionCounter > MAX_QUESTIONS){
      localStorage.setItem("mostRecentScore", score);
      //Go to end page//
      
         return window.location.assign('end.html');
    }
    //Redirect to End page when there are no more questions //

    //select random question//
    
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;
    
    //select random question//

    //show available answers in box//
   choices.forEach((choice) => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['option' + number];
    
    });
    //show available answers in box//
     availableQuesions.splice(questionIndex, 1);
     acceptingAnswers = true;
};
choices.forEach(choice =>  {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

     acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;
        
        const classToApply =
        selectedAnswer == currentQuestion.correct_answer ? "correct" : "incorrect";

        selectedChoice.classList.add(classToApply);

        setTimeout(() => {
        selectedChoice.classList.remove(classToApply);
        getNewQuestion();
        }, 1000);

          if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    });
    
});

const incrementScore = num => {
  score += num;
  scoreText.innerText = score;
  
  
};
  