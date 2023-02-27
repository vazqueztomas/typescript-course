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
// const stringEcho = (arg: string): string => arg
const echo = <T>(arg: T ): T => arg

const isObj = <T>(arg: T): boolean => {
  return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj('Jhon'));
console.log(isObj(true));
console.log(isObj([1,2,3]));
console.log(isObj({name: 'Jhon'}));

const isTrue = <T>(arg: T) : {arg: T, is: boolean} => {
  if (Array.isArray(arg) && !arg.length) {return {arg, is: false}}
  if(isObj(arg) && !Object.keys(arg as keyof T).length){
    return {arg, is: false}
  }
  return {arg, is: !!arg}
}

console.log(isTrue({name: 'Jhon'}));
console.log(isTrue(true));
console.log(isTrue(false));
console.log(isTrue([1,2,3,4,5]));
console.log(isTrue(undefined));
console.log(isTrue(NaN));

interface HasId {
  id: number,
}

const proccessUser = <T extends HasId>(user: T): T => {
  return user;
}

console.log(proccessUser({id: 1, name: "Tom"}))

const getUserProperties = <T extends HasId, K extends keyof T>(users: T[], key: K):T[K][] => {
  return users.map((user) => { return user[key]})
}

const userArray = [
  {id: 1, name: 'Tom', nota: 2},
  {id: 4, name: 'Juan', nota: 10},
]

console.log(getUserProperties(userArray, 'nota'));

class StateObject<T> {
  private data: T

  constructor(value: T){
    this.data = value;
  }

  get state (): T {
    return this.data
  }

  set state(value: T){
    this.data = value;
  }
}

const store = new StateObject<number>(2)
console.log(store.state)

// =================================================================================================================

// Utility types
interface Assignment {
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean,
}

const updateAssigment = (assign: Assignment, propsToUpdate: Partial<Assignment>) : Assignment => {
  return {...assign, ...propsToUpdate}
}

const assign1 : Assignment = {
  studentId: 'Tomasito123',
  title: 'Final project',
  grade: 0,
}

console.log(updateAssigment(assign1, {grade: 86}));
const assignGrade : Assignment = updateAssigment(assign1, {grade: 98})
console.log(assignGrade)

// required and readonly 
const recordAssigment = (assign:  Required<Assignment>) : Assignment => {
  return assign
}

const assignVerified: Readonly<Assignment> = recordAssigment({...assignGrade, verified: true})

// Record
const hexColor : Record<string, string> = {
  red : "FF0000",
  green: "00FF00",
  blue: "0000FF",
}

type Students = 'Sara' | 'Kelly' | 'Walter'
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'E'

// Records es un tipo que describe un objeto con un conjunto fijo de claves y un tipo especifico para cada valor correspondiente a las claves.

const finalGrades : Record<Students, LetterGrades> = {
  Sara: 'A',
  Kelly: 'B',
  Walter : 'C',
}

interface Grades {
  assign1: number,
  assign2: number,
}

const gradeData : Record<Students, Grades> = {
  Sara: {assign1: 86, assign2: 32},
  Kelly: {assign1: 23, assign2:76},
  Walter: {assign1: 99, assign2:56},
}

console.log(gradeData.Walter)

// Pick and Omit
type AssignResult = Pick<Assignment, 'grade' | 'studentId'> 

const score: AssignResult = {
  grade: 56,
  studentId: 'Cosmolito'
}

// Exclude saca del primer parametro (number string o boolean), lo que se le pase por el segundo parametro
type MyNumberTypes = number | string | boolean
type myExcludeTypes = Exclude<MyNumberTypes, number>

type MyAnimalTypes = 'dog' | 'cat' | 'bird' | 1 | 2 | 3;
type MyBirdTypes = Extract<MyAnimalTypes, 'bird' | 1 | 2>;

// NonNullable
type AllPossiblesGrades = 'Dave' | "Tomas" | null
type OnlyNames = NonNullable<AllPossiblesGrades>

// ReturnType
const createNewAssign = (title: string, points: number) => {
  return {title,points}
}

type NewAssing = ReturnType<typeof createNewAssign>

const tsAssign: NewAssing = createNewAssign('Utility Types', 100);
console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = [
  'Generics',
  100
]

const tsAssign2: NewAssing = createNewAssign(...assignArgs);
console.log(tsAssign2);

