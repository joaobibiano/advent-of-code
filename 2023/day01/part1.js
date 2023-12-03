const file = Bun.file('./input.txt');

const input = await file.text();

const items = input.split('\n');

const sum = items.reduce((acc, item) => {
	if (!item) return acc;

	const numbers = item.replace(/\D/g, '').split('');


	const number = `${numbers.at(0)}${numbers.at(-1)}`; 

	acc = acc + parseFloat(number);

	return acc

}, 0)

console.log(sum);
