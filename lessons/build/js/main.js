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
// ===========================================================
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
// interface TransactionObj {
//   Pizza: number,
//   Books: number,
//   Job: number
// }
const todayTransactions = {
    Pizza: -10,
    Books: 32,
    Job: 3
};
console.log(todayTransactions);
let prop = 'Pizza';
console.log(todayTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (let transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todayTransactions));
const student = {
    name: 'Tom',
    GPA: 10,
    classes: [100, 200]
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]} using a for loop`); // this is another way to access all properties
}
Object.keys(student).map((el) => {
    console.log(`${el}: ${student[el]} using Object.keys`);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 100,
    bonus: 200,
    sidehustle: 500,
};
console.log(monthlyIncomes);
//================================================================================================
// Generics
// const stringEcho = (arg: string): string => arg
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj('Jhon'));
console.log(isObj(true));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'Jhon' }));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue({ name: 'Jhon' }));
console.log(isTrue(true));
console.log(isTrue(false));
console.log(isTrue([1, 2, 3, 4, 5]));
console.log(isTrue(undefined));
console.log(isTrue(NaN));
const proccessUser = (user) => {
    return user;
};
console.log(proccessUser({ id: 1, name: "Tom" }));
const getUserProperties = (users, key) => {
    return users.map((user) => { return user[key]; });
};
const userArray = [
    { id: 1, name: 'Tom', nota: 2 },
    { id: 4, name: 'Juan', nota: 10 },
];
console.log(getUserProperties(userArray, 'nota'));
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject(2);
console.log(store.state);
const updateAssigment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'Tomasito123',
    title: 'Final project',
    grade: 0,
};
console.log(updateAssigment(assign1, { grade: 86 }));
const assignGrade = updateAssigment(assign1, { grade: 98 });
console.log(assignGrade);
// required and readonly 
const recordAssigment = (assign) => {
    return assign;
};
const assignVerified = recordAssigment(Object.assign(Object.assign({}, assignGrade), { verified: true }));
// Record
const hexColor = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
// Records es un tipo que describe un objeto con un conjunto fijo de claves y un tipo especifico para cada valor correspondiente a las claves.
const finalGrades = {
    Sara: 'A',
    Kelly: 'B',
    Walter: 'C',
};
const gradeData = {
    Sara: { assign1: 86, assign2: 32 },
    Kelly: { assign1: 23, assign2: 76 },
    Walter: { assign1: 99, assign2: 56 },
};
console.log(gradeData.Walter);
const score = {
    grade: 56,
    studentId: 'Cosmolito'
};
// ReturnType
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign('Utility Types', 100);
console.log(tsAssign);
const assignArgs = [
    'Generics',
    100
];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
