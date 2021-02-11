const username = document.getElementById("username");
const saveScoreBtn  = document.getElementById("saveScoreBtn");
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');
const TopScores =  JSON.parse(localStorage.getItem('TopScores')) || [];

const MAX_HIGH_SCORES = 5; 


finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () =>{
    saveScoreBtn.disabled = !username.value
});

saveHighScore = (e) =>{
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };  
     TopScores.push(score);
     TopScores.sort((a, b) => b.score - a.score);
     TopScores.splice(5);
     
     localStorage.setItem("TopScores", JSON.stringify(TopScores));
     window.location.assign("/");
     console.log(score)
};
