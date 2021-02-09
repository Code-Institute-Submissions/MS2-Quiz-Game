//  document.querySelector(".Get-Quote").addEventListener("click", GetAPI);

// function GetAPI(e) {
//   const data = null;

// const xhttp = new XMLHttpRequest();
// xhttp.withCredentials = true;

// xhttp.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log("response",this.responseText);
// 	}
// });

// xhttp.open("GET", "https://my-json-server.typicode.com/Federvgh%20/MS2-Quiz-Game/db");

//   xhttp.send();

//   e.preventDefault();

// }

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
      question: "the number of holes in a stipulated round of golf",
      correct_answer: 1,
      option1: 18,
      option2: 5,
      option3: 7,
      option4: 9,
    },
    {
     
      question: "the number of years in 235 lunations",
       correct_answer: 1,
      option1: 18,
      option2: 5,
      option3: 7,
      option4: 9,
    },
    {
     
      question: "the number of personality types in the Myers-Briggs classification system",
       correct_answer: 1,
      option1: 18,
      option2: 5,
      option3: 7,
      option4: 9,
    },
    {
    
      question: "the number of sides on the Canadian one-dollar coin (a hendecagon, an eleven-sided polygon)",
       correct_answer: 1,
      option1: 18,
      option2: 5,
      option3: 7,
      option4: 9,
    },
    {
      
      question: "the length in miles of a train of boxcars that can be filled from recycled paper in the USA every day",
       correct_answer: 1,
      option1: 18,
      option2: 5,
      option3: 7,
      option4: 9,
    },
    {
      
      question: "the number of years in 235 lunations",
      correct_answer: 1,
      option1: 18,
      option2: 5,
      option3: 7,
      option4: 9,
    },
    {
      
      question: "the number of levels in hell in the Chinese mythos",
       correct_answer: 1,
      option1: 18,
      option2: 5,
      option3: 7,
      option4: 9,
    },
    {
      
      question: "the final year a person is a teenager",
      correct_answer: 1,
      option1: 18,
      option2: 5,
      option3: 7,
      option4: 9,
    },
    {
      
      question: "the number of pieces the body of Osiris was torn into by his fratricidal brother Set",
      correct_answer: 1,
      option1: 18,
      option2: 5,
      option3: 7,
      option4: 9,
    },
    {
      question: "the number of Provinces in Canada",
       correct_answer: 1,
      option1: 18,
      option2: 5,
      option3: 7,
      option4: 9,
    }
  ];
//Constants
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    console.log(availableQuesions);
    getNewQuestion();
};
//Redirect to End page when there are no more questions //
    getNewQuestion = () => {
    if(availableQuesions.length === 0 || questionCounter > MAX_QUESTIONS){
        return window.location.assign("/end.html")
    }
    //Redirect to End page when there ae no more questions //

    //select random question//
    
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;
    
    //select random question//

    //show available answers in box//
   choices.forEach((choice) => {
        const number = choice.dataset['number'];
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
        const selectedAnswer = selectedChoice.dataset['number'];
        getNewQuestion();
    })
    
})
   


    
    
startGame();
  
