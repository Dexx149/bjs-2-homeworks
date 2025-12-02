function getArrayParams(...arr) {

	if (arr.length === 0) {
		return {
			min: 0,
			max: 0,
			avg: 0
		};
	}

	let min = arr[0];
	let max = arr[0];
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {

		const current = arr[i];

		if (current > max) {
			max = current;
		}

		if (current < min) {
			min = current;
		}

		sum += current;
	}

	const avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {

	if (arr.length === 0) return 0;

	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		const current = arr[i];
		sum += current;
	}

	return sum;

}

function differenceMaxMinWorker(...arr) {

	if (arr.length === 0) return 0;

	let min = arr[0];
	let max = arr[0];

	for (let i = 0; i < arr.length; i++) {
		const current = arr[i];

		if (current > max) {
			max = current;
		}

		if (current < min) {
			min = current;
		}

	}

	const difference = max - min;

	return difference;

}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;

	let even = 0;
	let odd = 0;

	for (let i = 0; i < arr.length; i++) {
		const current = arr[i];

		if (current % 2 === 0) {
			even += current;
		} else {
			odd += current;
		}
	}
	return even - odd;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		const current = arr[i];

		if (current % 2 === 0) {
			sumEvenElement += current;
			countEvenElement++;
		}
	}

	if (countEvenElement === 0) {
		return 0;
	}

	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {

	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {

		const currentArr = arrOfArr[i];

		const result = func(...currentArr);

		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}

	return maxWorkerResult;
}
