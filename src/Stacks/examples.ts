import {
    Stack
} from './';

/**
 * Convert the base of a number from decimal to any base
 * @param {Number} num Decimal number to convert
 * @param {Number} base base to convert to
 * @return {String} a string representation of the number with new Base
 */
function numberBaseConverter(num: number, base: number): string {
    const s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);

    let converted = "";
    while (s.length() > 0) {
        converted +=s.pop();
    }

    return converted;
}

console.log(numberBaseConverter(32, 2));

/**
 * Check a string to determine if it is a palindrome
 * @param {String} word string to check if a palindrome
 * @return {Boolean} return true if it is a palindrome else return false
 */
function isPalindrome(word: string) {
    const stackOfAlphabets = new Stack();
    for (let alphabet of word.toLowerCase().split("")) {
        const isAlphabet = /\w/;
        if (isAlphabet.test(alphabet)) {
            stackOfAlphabets.push(alphabet);
        } else {
            return false;
        }
    }

    let reverseOfWord = "";
    while (stackOfAlphabets.length() > 0) {
        reverseOfWord += stackOfAlphabets.pop();
    }
    return reverseOfWord === word.toLowerCase();
}

console.log(isPalindrome('Deleveled'))

