import { getCompPick, randomIntGen } from "./comPick.js";

import { getHumanPick, verifyPick } from "./humanPick.js";

function playRound() {
	let comPick = getCompPick;
	let humanPick = getHumanPick;

	if (comPick === humanPick) {
		return 0;
	}
	if (comPick === "rock") {
		if (humanPick == "paper") {
			return 1;
		}
		return -1;
	}
	if (comPick === "paper") {
		if (humanPick == "scissors") {
			return 1;
		}
		return -1;
	}
	if (comPick === "scissors") {
		if (humanPick == "rock") {
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
for (let i = 0; i <= numRounds; i++) {
	let result = playRound();
	let resultText = translateResult(result);
	if (result === 1) {
		humanScore++;
	}
	if (result === -1) {
		compScore++;
	}
}
