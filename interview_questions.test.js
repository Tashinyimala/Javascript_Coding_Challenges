// isInt

const functions = require('./interview_questions');

test('isInt function exist', () => {
    expect(functions.isInt).toBeDefined();
});

test('isInt(4) should be true', () => {
    expect(functions.isInt(4)).toBeTruthy();
});

test('isInt(12.2) should return false', () => {
    expect(functions.isInt(12.2)).toBeFalsy();
});

test('isInt(0.3) should return false', () => {
    expect(functions.isInt(0.3)).toBeFalsy();
});

// multipy(a)(b) test
test('multipy function exist', () => {
    expect(functions.multiply).toBeDefined();
});
test('multiply(2)(3) should result 6', () => {
    expect(functions.multiply(2)(3)).toBe(6);
});

test('multiply(8)(9) should result 72', () => {
    expect(functions.multiply(8)(9)).toBe(72);
});

// Array prototyping - average
test('average function exist', () => {
    expect(functions.averageIs).toBeDefined();
});

test('averageIs([1, 2, 3, 4, 5]) should result 3', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(functions.averageIs(arr)).toBe(3);
});

// createBase - closure function
test('createBase function exist', () => {
    expect(functions.createBase).toBeDefined();
});

test('createBase(6) created base 6', () => {
    const addSix = functions.createBase(6);
    expect(addSix(10)).toBe(16);
    expect(addSix(20)).toBe(26);
});

test('createBase(15) created base 15', () => {
    const add15 = functions.createBase(15);
    expect(add15(6)).toBe(21);
    expect(add15(20)).toBe(35);
});

// private counter
test('counter function exist', () => {
    expect(functions.counter).toBeDefined();
});

test('private counter', () => {
    const privateCounter = functions.counter();
    privateCounter.add(4);
    privateCounter.add(5);

    expect(privateCounter.retrieve()).toBe(9);
});

// countSteps
test('countSteps function exist', () => {
    expect(functions.countSteps).toBeDefined();
});

test('countSteps(6) should result 13', () => {
    expect(functions.countSteps(6)).toBe(13);
});

// bubble Sort
test('bubbleSort function exist', () => {
    expect(functions.bubbleSort).toBeDefined();
});

test('bubbleSort([103, 45, 2, 1, 97, -4, 67])) should result [-4, 1, 2, 45, 67, 97, 103]', () => {
    const arr = [103, 45, 2, 1, 97, -4, 67];
    const result = [-4, 1, 2, 45, 67, 97, 103];
    expect(functions.bubbleSort(arr)).toEqual(result);
});

// Dutch National Flag Sort
test('dutchNatFlagSort function exist', () => {
    expect(functions.dutchNatFlagSort).toBeDefined();
});

test('dutchNatFlagSort([0, 0, 0, 1, 1, 2, 2, 2])) should result [0, 0, 0, 1, 1, 2, 2, 2]', () => {
    const arr = [2, 2, 2, 0, 0, 0, 1, 1];
    const result = [0, 0, 0, 1, 1, 2, 2, 2];
    expect(functions.dutchNatFlagSort(arr)).toEqual(result);
});
