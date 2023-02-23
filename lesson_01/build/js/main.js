"use strict";
const add = (a, b) => {
    return a + b;
};
const logMsg = (msg) => {
    console.log(msg);
};
logMsg('hello!');
let substract = function (c, d) {
    return c - d;
};
console.log(substract(3, 2));
let multiply = function (a, b) {
    return a * b;
};
let addAllNums = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(addAllNums(3, 2, 1));
const createError = (msg) => {
    throw new Error(msg);
};
// convert to more or less specific 
let a = 'hello';
let b = a; // less specific
let c = a; // more specific
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
