function randomIntGen() {
	let randomFloat = Math.random();
	let randomInt = Math.round(randomFloat * 100) % 3;
	return randomInt;
}

// console.log(randomIntGen());
function getCompChoice() {
	let randomInt = randomIntGen();
	switch (randomInt) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissors";
		default:
			return "Error";
	}
}
