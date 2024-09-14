//  Validating Leap Years

/*

Difficulty: Easy
Topics: Basic Programming, Date Handling
Description: Write a program to check if a given year is a leap year.
Example:
Input: year = 2020
Output: Leap Year
Explanation: 2020 is divisible by 4 but not by 100, or it is divisible by 400, so it is a leap year.

*/

const year = 2020544;

if (year%4==0) {
    console.log(`${year} this year is leap year`);
    
} else {
    console.log(`${year} this year is not leap year`);
}