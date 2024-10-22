// import { getHumanPick, verifyPick } from "./humanPick.js";
//

function randomIntGen() {
	let randomFloat = Math.random();
	let randomInt = Math.round(randomFloat * 100) % 3;
	return randomInt;
}

// console.log(randomIntGen());
function getCompPick() {
	let randomInt = randomIntGen();
	switch (randomInt) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
		default:
			return "error";
	}
}
// console.log(getCompChoice());
//////////////////////////////////
function verifyPick(x) {
	x = x.toUpperCase();
	if (x === "ROCK") {
		return true;
	}
	if (x === "PAPER") {
		return true;
	}
	if (x === "SCISSORS") {
		return true;
	}
	return false;
}

function getHumanPick() {
	let choice = globalThis.prompt("Type 'rock', 'paper' or 'scissors'");
	while (verifyPick(choice) === false) {
		choice = globalThis.prompt(
			"Invalid input. Type 'rock', 'paper' or 'scissors'",
		);
	}
	return choice;
}
// console.log(getHumanPick());
// export { getHumanPick, verifyPick };

//////////////////////////////////
// export { getCompPick, randomIntGen };
function playRound() {
	let comPick = getCompPick().toUpperCase();
	let humanPick = getHumanPick().toUpperCase();

	if (comPick === humanPick) {
		return 0;
	}
	if (comPick === "ROCK") {
		if (humanPick == "PAPER") {
			return 1;
		}
		return -1;
	}
	if (comPick === "PAPER") {
		if (humanPick == "SCISSORS") {
			return 1;
		}
		return -1;
	}
	if (comPick === "SCISSORS") {
		if (humanPick == "ROCK") {
			return 1;
		}
		return -1;
	}
}
function translateResult(result) {
	switch (result) {
		case 0:
			return "Draw!";
		case 1:
			return "You won this round!";
		case -1:
			return "COMPUTER won this round!";
		default:
			return "error";
	}
}
let humanScore = 0;
let compScore = 0;
let numRounds = window.prompt("Type the number of rounds you want to play");
for (let i = 1; i <= numRounds; i++) {
	let result = playRound();
	let resultText = translateResult(result);
	if (result === 1) {
		humanScore++;
	}
	if (result === -1) {
		compScore++;
	}
	console.log(resultText);
}
let outputMessage = "";
if (humanScore < compScore) {
	outputMessage = "COMPUTER won! ";
	outputMessage = outputMessage + "Scores:\n You=" + humanScore +
		", COMPUTER:" +
		compScore;
} else if (humanScore > compScore) {
	outputMessage = "You won! ";
	outputMessage = outputMessage +
		("Scores:\n You=" + humanScore + ", COMPUTER:" + compScore);
} else {
	outputMessage = "It's a draw! ";
	outputMessage = outputMessage +
		("Scores:\n You=" + humanScore + ", COMPUTER:" + compScore);
}
let e = Event("click");
alert(e.isTrusted);
const container = document.querySelector("body");
const newParag = document.createElement("p");
newParag.textContent = outputMessage;
newParag.style.color = "indigo";
container.append(newParag);
