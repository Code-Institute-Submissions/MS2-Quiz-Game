const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreText = document.getElementById("score");

let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

 let questions = [
   
   {
      "question": "The number of holes in a stipulated round of golf",
      "correct_answer": 1,
      "option1": 18,
      "option2": 5,
      "option3": 7,
      "option4": 9
    },
    {
      "question":  "The minimum wind speed (mph) needed to issue a Severe Thunderstorm Warning",
      "correct_answer": 3,
      "option1": 68,
      "option2": 79,
      "option3": 58,
      "option4": 99
    },
    {
     
      "question": "The number of times an average person laughs a day",
      "correct_answer": 2,
      "option1": 10,
      "option2": 15,
      "option3": 25,
      "option4": 32
    },
    
    {
     
      "question": "The number of personality types in the Myers-Briggs classification system",
       "correct_answer": 2,
      "option1": 18,
      "option2": 16,
      "option3": 20,
      "option4": 10
    },
    {
    
      "question": "The minimum driving age for a car or van in the United Kingdom",
       "correct_answer": 1,
      "option1": 17,
      "option2": 18,
      "option3": 19,
      "option4": 21
    },
    {
      
      "question": "The number of times that a typical dairy cow lies down and stands up a day on average",
      "correct_answer": 3,
      "option1": 18,
      "option2": 5,
      "option3": 14,
      "option4": 9
    },
    {
      
      "question": "The number of colors the labels for Crayola crayons come in",
       "correct_answer": 2,
      "option1": 16,
      "option2": 18,
      "option3": 12,
      "option4": 9
    },
    {
      
      "question": "The number of questions in the popular party game Twenty Questions",
      "correct_answer": 1,
      "option1": 20,
      "option2": 50,
      "option3": 10,
      "option4": 40
    },
    {
      
      "question": "The number of days in a fortnight",
      "correct_answer": 3,
      "option1": 24,
      "option2": 4,
      "option3": 14,
      "option4": 24
    },
    {
       "question":  "The number of unique ranks in a suit in a pack of cards.",
      "correct_answer": 2,
      "option1": 12,
      "option2": 13,
      "option3": 20,
      "option4": 14
    },
     {
      "question": "The number of letters in the English and Interlingua alphabets.",
      "correct_answer": 1,
      "option1": 26,
      "option2": 25,
      "option3": 19,
      "option4": 29
    },
    {
      "question":  "The angle in degrees for which a rainbow appears or the critical angle",
      "correct_answer": 3,
      "option1": 49,
      "option2": 63,
      "option3": 42,
      "option4": 29
    },
    {
      "question": "The number of countries in the European Union (as of August 2011)",
      "correct_answer": 1,
      "option1": 27,
      "option2": 25,
      "option3": 30,
      "option4": 29
    },
    {
      "question":  "The number of points on a backgammon board",
      "correct_answer": 3,
      "option1": 51,
      "option2": 64,
      "option3": 24,
      "option4": 30
    },
    {
      "question": "The percentage of methane on Earth produced from the flatulence of domesticated cows",
      "correct_answer": 2,
      "option1": 40,
      "option2": 30,
      "option3": 50,
      "option4": 80
    },
    {
      "question":  "The code for international direct dial phone calls to Vietnam",
      "correct_answer": 3,
      "option1": 78,
      "option2": 56,
      "option3": 84,
      "option4": 45
    },
     {
      "question": "The number of sets needed to be won to win the whole match in volleyball",
      "correct_answer": 1,
      "option1": 3,
      "option2": 4,
      "option3": 6,
      "option4": 5
    },
    {
      "question":  "The number of bits in a byte",
      "correct_answer": 4,
      "option1": 64,
      "option2": 32,
      "option3": 16,
      "option4": 8
    },
 {
      "question": "The pairs of ribs normally in the human body",
      "correct_answer": 1,
      "option1": 12,
      "option2": 14,
      "option3": 8,
      "option4": 10
    },
    {
      "question":  "the highest jersey number allowed in most major league sports",
      "correct_answer": 3,
      "option1": 25,
      "option2": 88,
      "option3": 99,
      "option4": 77
    },
    {
      "question": "The approximate number of days it takes Mercury to complete its orbit",
      "correct_answer": 1,
      "option1": 88,
      "option2": 75,
      "option3": 98,
      "option4": 56
    },
    {
      "question":  "The number Bill and Ted were thinking of when talking to their future selves",
      "correct_answer": 2,
      "option1": 99,
      "option2": 69,
      "option3": 13,
      "option4": 43
    },
    {
      "question": "The number of colonies that formed the United States",
      "correct_answer": 2,
      "option1": 19,
      "option2": 13,
      "option3": 12,
      "option4": 16
    },
    {
      "question":  "The number of times Julius Caesar was stabbed",
      "correct_answer": 3,
      "option1": 13,
      "option2": 50,
      "option3": 23,
      "option4": 45
    },
 {
      "question": "The number of suicides mentioned in the Bible",
      "correct_answer": 4,
      "option1": 3,
      "option2": 4,
      "option3": 6,
      "option4": 7
    },
    {
      "question":  "The number of points on the stylized maple leaf on the Flag of Canada",
      "correct_answer": 1,
      "option1": 11,
      "option2": 8,
      "option3": 14,
      "option4": 10
    }

    
  ];


// function GetAPI(e) {
//     const data = null;

//     const xhttp = new XMLHttpRequest();
//     xhttp.withCredentials = true;

//     xhttp.addEventListener("readystatechange", function () {
//         if (this.readyState === this.DONE) {
//             console.log("response",this.responseText);
//         }
//     });

//     xhttp.open("GET", "https://my-json-server.typicode.com/Federvgh%20/MS2-Quiz-Game/db");

//     xhttp.send();
// }

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
         return window.location.assign('/end.html');
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
  
