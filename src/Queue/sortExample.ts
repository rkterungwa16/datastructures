import {
    Queue
} from './';

/**
 * Radix sort: Make two passes over a data
 * 1. First sort: sorts numbers based on the 1s digit
 * 2. Second pass sorts the numbers based on the 10s digit
 * Each number is placed in a bin based on the digit in each
 * of these two places.
 */

/**
 * Distribute numbers by the place (1s or 10s) digit
 *
 * @param numbers
 * @param queues
 * @param n number of digits
 * @param digit digit: unit(1s) tens(10s) etc
 */
function distribute(
    numbers: number[],
    queues: Queue[],
    n: number,
    digit: number
) {
    for (let i=0; i<n; ++i) {
        if (digit === 1) {
            queues[numbers[i] % 10].enqueue(numbers[i]);
        } else {
            queues[Math.floor(numbers[i] / 10)].enqueue(numbers[i]);
        }
    }
    return queues;
}

/**
 *
 * @param queues
 * @param numbers
 */
function collect(queues: Queue[]) {
    let i: number = 0;
    let numbers: any[] = [];
    for (let digit = 0; digit < 10; ++digit) {
        while (!queues[digit].isEmpty()) {
            numbers[i++] = queues[digit].dequeue();
        }
    }
    return numbers
}

const queues = Array(10).fill(0).map(() => {
    return new Queue();
});
const numbers = Array(10).fill(0).map(() => {
    return Math.floor(Math.random() * 101);
})
console.log('numbers', numbers);
const firstPassQueue = distribute(numbers, queues, 10, 1);
// console.log('first pass queue', firstPassQueue);
const firstPassNumbers = collect(firstPassQueue);
console.log('firstPass number', firstPassNumbers);
const secondPassQueue = distribute(firstPassNumbers, firstPassQueue, 10, 10);
const secondPassNumbers = collect(secondPassQueue);
console.log('second pass numbers', secondPassNumbers);
