var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	
	
};

function displayResults()
{
	var average = 0;
	for(var i=0;i<scores.length;i++)
	{
		average= (average*(i)+scores[i])/(i+1);
	}

	document.getElementById("results").innerHTML="<h2> Results </h2><br /> Average score is "+average + "<br \>  " + highScore();
}

function displayScores() {
	
	var result = "";

	for(var i = 0; i < scores.length; i++) {
		result = result + names[i] + "		" + scores[i] + "<br>";
	}

	document.getElementById("scores_table").innerHTML="<h2> Scores </h2><br /> " + result;
	

}

function addScore() {

	var names = document.getElementById("name").value;
	var scores = document.getElementById("score").value;

	scoreInt = parseInt(scores);

	if (document.getElementById("name").value == "" || document.getElementById("score").value == "") {
		alert("You must enter a name and a valid score");
		return;
	}
	else if (scoreInt < 0 || scoreInt > 100) {
		alert("You must enter a name and a valid score");
		return;
	}
	else {
		names.push(names);
	scores.push(Number(scores));
	
	document.getElementById("scores_table").innerHTML="";
	document.getElementById("results").innerHTML="";
	
	displayScores();
	displayResults();
	
	document.getElementById("name").value="";
	document.getElementById("score").value="";
		
	}
	
}



