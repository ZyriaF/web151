
// script.js
// clicker app
//////////////////////////////////////
/////////////////////////////////////

//functions go here
var clickHandler = function (event) {
	console.log("click");
	g = window.game;
	g.score = g.score +1 + g.interns;
	$("#score").text(g.score);
	console.log(g.score);
};


var hireInterns = function (event){
	g = window.game;
	//interns cost $$$
	internCost = 10 + g.interns;
	if (g.score >= internCost) {
		g.score = g.score - internCost;
		g.interns = g.interns +1;
	}
	console.log("Interns = " + g.interns);
	console.log("Cost per intern = " + internCost);
	$("#interns").text(g.interns);
};
///////////////////////////////
//////////////////////////////
//main program goes here

//create game object
this.game = {
	name: "Clicker Game",
	score:0,
	interns: 0,
};

//set starting score
//this.game.score = 0;
$("#score").text(this.game.score);

//set autoclickers
$("#interns").text(this.game.score);

//set the click handler 
$("#clickme").click(clickHandler);

$("#hireInterns").click(hireInterns);

