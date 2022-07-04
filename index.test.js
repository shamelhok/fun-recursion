const {factorial, sum, reverseString, countSpaces
, sumDigits, fibonacci, deepTotals, deepIncludes, countObjects, deepFreeze} = require('./index')

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

describe('fibonacci', () => {
    test('returns matching fibonacci sequence',() => {
        expect(fibonacci(1)).toBe(0)
        expect(fibonacci(2)).toBe(1)
        expect(fibonacci(7)).toBe(8)
        expect(fibonacci(8)).toBe(13)
    })
})

describe('deepTotals', () => {
    test('empty array returns 0', () => {
        expect(deepTotals([])).toBe(0)
    })
    test('returns totals of nested arrays', () => {
        expect(deepTotals([1, 2, 3])).toBe(6)
        expect(deepTotals([1, [5, 10]])).toBe(16)
        expect(deepTotals([3, [[6]], 9])).toBe(18)
    })

})

describe('deepIncludes', () => {
    test('empty array returns false', () => {
        expect(deepIncludes([])).toBe(false)
    })
    test('returns true if value is in nested array', () => {
        expect(deepIncludes([1, 2], 3)).toBe(false)
        expect(deepIncludes(["toast", ["avocado", ["chilli flakes"]]], "avocado")).toBe(true)
    })
})

describe('count objects', ()=>{
    test('empty object should return 1', () => {
        expect(countObjects({})).toBe(1)
    });
    test('no nested objects', () => {
        expect(countObjects({ a: 1 })).toBe(1)
    });
    test('counts number of nested objects', () => {
        expect(countObjects({ a: { b: { c: 1 } } })).toBe(3)
    });
})

describe('deep freeze',()=>{
    test('freezes object with no nested objects ', () => {
        const object={}
        deepFreeze(object)
        object.name='sarah'
        expect(object).toEqual({})
    });
    test('freezes object with no nested objects ', () => {
        const object={name:'shamel'}
        deepFreeze(object)
        object.name='sarah'
        delete object.name
        expect(object).toEqual({name:'shamel'})
    });
    test('freezes nested objects ', () => {
        const object={name:{age:25}}
        deepFreeze(object)
        object.name='sarah'
        delete object.name
        delete object.name.age

        expect(object).toEqual({name:{age:25}})
    });
})


