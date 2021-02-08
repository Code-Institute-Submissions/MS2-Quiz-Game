document.querySelector(".Get-Quote").addEventListener("click", GetAPI);

function GetAPI(e) {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "http://numbersapi.com/random/trivia"), true;

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector("#question").innerHTML = this.responseText;
    }
  };

  xhttp.send();

  e.preventDefault();
}
