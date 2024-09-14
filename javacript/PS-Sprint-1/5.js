// Generating the Fibonacci Series

/*

Difficulty: Easy
Topics: Basic Programming, Sequences
Description: Write a program to generate the Fibonacci series up to a given number.
Example:
Input: limit = 10
Output: [0, 1, 1, 2, 3, 5, 8]
Explanation: The Fibonacci series up to 10 is generated as [0, 1, 1, 2, 3, 5, 8].

*/

function febo(limit) {
    let fiboSeq = [0, 1];  // Start the Fibonacci sequence with 0 and 1

    while (true) {
        // Calculate the next Fibonacci number
        let nextFibo = fiboSeq[fiboSeq.length - 1] + fiboSeq[fiboSeq.length - 2];

        // Break the loop if the next Fibonacci number exceeds the limit
        if (nextFibo > limit) {
            break;
        }

        // Add the next Fibonacci number to the sequence
        fiboSeq.push(nextFibo);
    }

    console.log(fiboSeq);
}

febo(10)
