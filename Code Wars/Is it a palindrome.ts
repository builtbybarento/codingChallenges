8 kyu - Is it a palindrome?

Description: 

Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.


Solution:

export function isPalindrome(x: string): boolean {
    return x.toLowerCase() === x.split('').reverse().join('').toLowerCase()
  }