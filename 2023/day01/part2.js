const file = Bun.file('./input.txt');

const input = await file.text();

const items = input.split('\n');

const numbersAsWords = [
	"one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
]

const sum = items.reduce((acc, item) => {
	if (!item) return acc;

	let temp = "";
	let index = 0;
	while (index < item.length) {
		// if char is a number, next;
		if (!Number.isNaN(parseInt(item[index]))) {
			temp = temp + item[index];
			index++;
		} else {

			let found = false;
			for (let i = 0; i < numbersAsWords.length; i++) {
				const strToCompare = item.slice(index, index + numbersAsWords[i].length);
				if (strToCompare === numbersAsWords[i]) {
					temp = temp + (i + 1);
					index = index + numbersAsWords[i].length - 1;
					found = true;
				}
			}

			if (!found) {
				index++;
			}

		}
	}

	const numbers = temp.replace(/\D/g, '').split('');

	const number = `${numbers.at(0)}${numbers.at(-1)})}`;

	acc = acc + parseFloat(number);

	return acc

}, 0)

console.log(sum);
