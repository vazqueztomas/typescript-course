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

// =================================================================================================================
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

// ===========================================================
// classes
class Coder {
  secondLang!: string
  constructor( public readonly name: string, readonly music: string, private age: number, protected lang: string = 'Typescript'){
    this.name = name;
    this.music = music; 
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`
  }
}

const Dave = new Coder('Dave', 'Trap', 24)
console.log(Dave.getAge())

class WebDev extends Coder {
  constructor(public computer: string, name: string, lang: string, age: number){
    super(name, lang, age)
    this.computer = computer;
  }

  public getLang(){
    return `Hello I write ${this.lang}`
  }
}

const Sara = new WebDev('Mac', 'Sara', 'Typescript', 29)
console.log(Sara.getLang());
console.log(Sara.computer)


interface Musician {
  name: string,
  instrument: string,
  play(action: string): string
}

class Pianist implements Musician {
  name: string
  instrument: string

  constructor(name: string, instrument: string){
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`
  }
}

const Tomas = new Pianist('Tomas', 'Guitar')
console.log(Tomas.play('tocando'))

class Peeps {
  static count : number = 0;

  static getCount():number {
    return Peeps.count;
  }

  public id : number

  constructor(public name: string){
    this.name = name;
    this.id =  ++Peeps.count;
  }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Davinson = new Peeps('Davinson')

// for every class created, the peeps count increments by one
console.log(Peeps.count)
console.log(Steve.id)


class Bands {
  private dataState: string[];

  constructor(){
    this.dataState = []
  }

  public get data(): string[]{
    return this.dataState;
  }

  public set data(value:string[]){
    if(Array.isArray(value) && value.every(el => typeof el === 'string')){
      this.dataState = value;
      return
    } else {
      throw new Error('param is not an array of strings');
    }
  }
}

const myBands = new Bands()
myBands.data = ['ACDC', 'Guns and Roses', 'Kiss'];
console.log(myBands.data)

// =========================================================================================================================
// Index signature
interface TransactionObj {
  readonly [index: string]: number
}
// interface TransactionObj {
//   Pizza: number,
//   Books: number,
//   Job: number
// }

const todayTransactions: TransactionObj = {
  Pizza: -10,
  Books: 32,
  Job: 3
}

console.log(todayTransactions)

let prop: string = 'Pizza'
console.log(todayTransactions[prop])

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0
  for (let transaction in transactions) {
    total += transactions[transaction]
  }
  return total
} 

console.log(todaysNet(todayTransactions))

interface Student {
  // [key: string] : string | number | number[] | undefined
  name: string,
  GPA: number,
  classes?:number[],
}

const student: Student = {
  name: 'Tom',
  GPA: 10,
  classes: [100, 200]
}

// console.log(student.test)
for (const key in student){
  console.log(`${key}: ${student[key as keyof Student]} using a for loop`) // this is another way to access all properties
}

Object.keys(student).map((el) => {
  console.log(`${el}: ${student[el as keyof Student]} using Object.keys`)
})

const logStudentKey = (student: Student, key: keyof Student) => {
  console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'GPA') 

// interface Incomes {
//   [key: string] : number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'
type Incomes = Record<Streams, number | string>

const monthlyIncomes : Incomes = {
  salary: 100,
  bonus: 200,
  sidehustle: 500,
}

console.log(monthlyIncomes); 

//================================================================================================

// Generics
