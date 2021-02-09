document.querySelector(".Get-Quote").addEventListener("click", GetAPI);

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

  e.preventDefault();

}