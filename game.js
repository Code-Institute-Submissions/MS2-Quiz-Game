const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById("score");

let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

 let questions = []
   
//     {
//       "question": "The number of holes in a stipulated round of golf",
//       "correct_answer": 1,
//       "option1": 18,
//       "option2": 5,
//       "option3": 7,
//       "option4": 9
//     },
//     {
//       "question":  "The minimum wind speed (mph) needed to issue a Severe Thunderstorm Warning",
//       "correct_answer": 3,
//       "option1": 68,
//       "option2": 79,
//       "option3": 58,
//       "option4": 99,
//     },
//     {
     
//       "question": "The number of times an average person laughs a day",
//       "correct_answer": 2,
//       "option1": 10,
//       "option2": 15,
//       "option3": 25,
//       "option4": 32
//     },
    
//     {
     
//       "question": "The number of personality types in the Myers-Briggs classification system",
//        "correct_answer": 2,
//       "option1": 18,
//       "option2": 16,
//       "option3": 20,
//       "option4": 10
//     },
//     {
    
//       "question": "The minimum driving age for a car or van in the United Kingdom",
//        "correct_answer": 1,
//       "option1": 17,
//       "option2": 18,
//       "option3": 19,
//       "option4": 21
//     },
//     {
      
//       "question": "The number of Oscar nominations of actress Meryl Streep, who holds the record for the most Oscar nominated actress",
//        "correct_answer": 1,
//       "option1": 13,
//       "option2": 9,
//       "option3": 10,
//       "option4": 15
//     },
//     {
      
//       "question": "The number of times that a typical dairy cow lies down and stands up a day on average",
//       "correct_answer": 3,
//       "option1": 18,
//       "option2": 5,
//       "option3": 14,
//       "option4": 9
//     },
//     {
      
//       "question": "The number of colors the labels for Crayola crayons come in",
//        "correct_answer": 2,
//       "option1": 16,
//       "option2": 18,
//       "option3": 12,
//       "option4": 9
//     },
//     {
      
//       "question": "The number of questions in the popular party game Twenty Questions",
//       "correct_answer": 1,
//       "option1": 20,
//       "option2": 50,
//       "option3": 10,
//       "option4": 40
//     },
//     {
      
//       "question": "The number of days in a fortnight",
//       "correct_answer": 3,
//       "option1": 24,
//       "option2": 4,
//       "option3": 14,
//       "option4": 24
//     },
//     {
//       "question":  "The number of different characters that can be used with a standard English Keyboard, excluding uppercase letters",
//       "correct_answer": 3,
//       "option1": 32,
//       "option2": 68,
//       "option3": 71,
//       "option4": 92,
//     },
//     {
//        "question":  "The number of unique ranks in a suit in a pack of cards.",
//       "correct_answer": 2,
//       "option1": 12,
//       "option2": 13,
//       "option3": 20,
//       "option4": 14,
//     }

    
//   ];


function GetAPI(e) {
    const data = null;

    const xhttp = new XMLHttpRequest();
    xhttp.withCredentials = true;

    xhttp.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log("response",this.responseText);
        }
    });

    xhttp.open("GET", "https://my-json-server.typicode.com/Federvgh%20/MS2-Quiz-Game/db");

    xhttp.send();
}

//Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 2;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
    
};
//Redirect to End page when there are no more questions //
    getNewQuestion = () => {
    if(availableQuesions.length === 0 || questionCounter > MAX_QUESTIONS){
      localStorage.setItem("mostRecentScore", score);
      //Go to end page//
        
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

incrementScore = num => {
  score += num;
  scoreText.innerText = score;
  
};

   
    
startGame();
  
