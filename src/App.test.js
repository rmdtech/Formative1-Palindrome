// App.test.js
import { checkPalindrome } from './App'; // Update with correct import path

describe('Palindrome Checker', () => {
    test('Empty string should be a palindrome', () => {
        expect(checkPalindrome('')).toBe(true);
    });

    test('Single character string should be a palindrome', () => {
        expect(checkPalindrome('a')).toBe(true);
    });

    test('Non-palindrome string should return false', () => {
        expect(checkPalindrome('hello')).toBe(false);
    });

    test('Palindrome string should return true', () => {
        expect(checkPalindrome('Racecar')).toBe(true);
    });
});