document.querySelector(".Get-Quote").addEventListener("click", GetAPI);

function GetAPI(e) {
  const xhttp = new XMLHttpRequest();

  xhttp.open("GET", "http://numbersapi.com/random/trivia"), true;

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector("#question").innerHTML = this.responseText;
    }
  };

  if (window.location.protocol.indexOf("https") == 0) {
    var el = document.createElement("meta");
    el.setAttribute("http-equiv", "Content-Security-Policy");
    el.setAttribute("content", "upgrade-insecure-requests");
    document.head.append(el);
  }

  xhttp.send();

  e.preventDefault();
}
