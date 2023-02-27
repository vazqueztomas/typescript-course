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
let year = document.getElementById('year');
let thisYear = new Date().getFullYear().toString();
if (year) {
    year.setAttribute('datetime', thisYear);
    year.textContent = thisYear;
}
// classes
class Coder {
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder('Dave', 'Trap', 24);
console.log(Dave.getAge());
class WebDev extends Coder {
    constructor(computer, name, lang, age) {
        super(name, lang, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `Hello I write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Typescript', 29);
console.log(Sara.getLang());
console.log(Sara.computer);
class Pianist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Tomas = new Pianist('Tomas', 'Guitar');
console.log(Tomas.play('tocando'));
class Peeps {
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
    static getCount() {
        return Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Davinson = new Peeps('Davinson');
// for every class created, the peeps count increments by one
console.log(Peeps.count);
console.log(Steve.id);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('param is not an array of strings');
        }
    }
}
const myBands = new Bands();
myBands.data = ['ACDC', 'Guns and Roses', 'Kiss'];
console.log(myBands.data);
