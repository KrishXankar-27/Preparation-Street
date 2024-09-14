// Calculating Armstrong Numbers

/*

Difficulty: Easy
Topics: Basic Programming, Number Theory
Description: Write a program to check if a number is an Armstrong number.
Example:
Input: number = 153
Output: Armstrong Number
Explanation: 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.

*/

function Armstrong(n) {
    // Convert the number to string to easily iterate through digits
    let number = n.toString();

    // Get the number of digits in the number
    let numLength = number.length;

    // Initialize output to 0 for calculating the sum of digits raised to power numLength
    let output = 0;

    // Iterate through each digit in the number
    for (let i of number) {
        output += parseInt(i) ** numLength;  // Raise each digit to the power of numLength and add to output
    }

    // Check if the calculated sum is equal to the original number
    if (output === n) {
        console.log(`${n} is an Armstrong number`);
    } else {
        console.log(`${n} is not an Armstrong number`);
    }
}

Armstrong(153)
