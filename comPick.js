function randomIntGen() {
	let randomFloat = Math.random();
	let randomInt = Math.round(randomFloat * 100) % 3;
	return randomInt;
}

console.log(randomIntGen());
