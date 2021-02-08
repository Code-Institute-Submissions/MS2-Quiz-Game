document.querySelector(".Get-Quote").addEventListener("click", GetAPI);

function GetAPI(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "http://numbersapi.com/random/trivia"), true;

  xhr.onload = function () {
    if (this.status === 200) {
      const response = this.responseText;
      console.log(response);
    }
  };

  xhr.send();

  e.preventDefault();
}
