const isPalindrome = require('./palindrome_checker');

test('isPalindrome function exist', () => {
    expect(isPalindrome).toBeDefined();
});

test('is "tashi" a Palindrome', () => {
    expect(isPalindrome('tashi')).toBeFalsy();
});

test('is "eye" a Palindrome', () => {
    expect(isPalindrome('eye')).toBeTruthy();
});

test('is "eye" a Palindrome', () => {
    expect(isPalindrome('_eye')).toBeTruthy();
});

test('A man, a plan, a canal. Panama', () => {
    expect(isPalindrome('A man, a plan, a canal. Panama')).toBeTruthy();
});

test('0_0 (: /-\ :) 0-0', () => {
    expect(isPalindrome('0_0 (: /-\ :) 0-0')).toBeTruthy();
});