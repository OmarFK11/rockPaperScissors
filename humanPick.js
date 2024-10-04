function verifyPick(x) {
	if (x === "rock") {
		return true;
	}
	if (x === "paper") {
		return true;
	}
	if (x === "scissors") {
		return true;
	}
	return false;
}

function getHumanPick() {
	let choice = window.prompt("Type 'rock', 'paper' or 'scissors'");
	while (verifyPick(choice) === false) {
		choice = window.prompt(
			"Invalid input. Type 'rock', 'paper' or 'scissors'",
		);
	}
	return choice;
}
// console.log(getHumanPick());
export { getHumanPick, verifyPick };
