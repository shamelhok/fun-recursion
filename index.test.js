const {factorial, sum, reverseString, countSpaces
, sumDigits} = require('./index')

describe('factorial',()=>{
    test('factorial of 0 equals 1',()=>{
        expect(factorial(0)).toBe(1)
    });
    test('testing that it calls on itself sequentially', () => {
        expect(factorial(4)).toBe(24)
    });
})

describe('sum',()=>{
    test('sum of 1 should return 1', () => {
        expect(sum(1)).toBe(1)
    });
    test('sums integers from 1 to num', () => {
        expect(sum(4)).toBe(10)
        expect(sum(5)).toBe(15)
        expect(sum(6)).toBe(21)
    });
})

describe('reverse String',()=>{
    test('empty string should return empty string', () => {
        expect(reverseString('')).toBe('')
    });
    test('reverses string', () => {
        expect(reverseString('12345')).toBe('54321')
    });
})

describe('count spaces',()=>{
    test('empty string', () => {
        expect(countSpaces('')).toBe(0)
    });
    test('should return 0 for a string with no spaces', () => {
        expect(countSpaces('asdf')).toBe(0)
    });
    test('should count the spaces', () => {
        expect(countSpaces('a s d f')).toBe(3)
    });
})

describe('sum digits',()=>{

    test('0 test', () => {
        expect(sumDigits(0)).toBe(0)
    });
    test('should sum digits', () => {
        expect(sumDigits(11)).toBe(2)
    });
    test('should recursively sum digits', () => {
        expect(sumDigits(99)).toBe(9)
    });
})