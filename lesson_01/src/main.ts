type stringOrNumber = string | number;
type stringOrNumberArray = (string|number)[]
type Guitarist = {
  name: string,
  isActive: boolean,
  bands : stringOrNumberArray
}

const add = (a:number,b:number): number => {
  return a + b;
}

const logMsg = (msg: any): void => {
  console.log(msg);
}

logMsg('hello!')

let substract = function (c: number, d: number):number {
  return c - d;
}

console.log(substract(3,2))

type mathFunction = (a: number, b: number) => number;
 
let multiply : mathFunction = function(a: number, b: number){
  return a * b;
}

let addAllNums = (...nums: number[]):number => {
	return nums.reduce((prev, curr) => prev + curr)
}

logMsg(addAllNums(3,2,1))

const createError = (msg: string): Error => {
  throw new Error(msg);
}


// assertions

type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specific 
let a : One = 'hello';
let b = a as Two; // less specific
let c = a as Three; // more specific

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if (c === 'add') return a + b 
  return '' + a + b
}

let myVal : string = addOrConcat(2, 2, 'concat') as string;

let year : HTMLElement | null = document.getElementById('year')
let thisYear: string = new Date().getFullYear().toString();
if (year) {
  year.setAttribute('datetime', thisYear);
  year.textContent = thisYear;
}

// classes
class Coder {
  constructor( public readonly name: string, readonly music: string, private age: number, protected lang: string){
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

}

