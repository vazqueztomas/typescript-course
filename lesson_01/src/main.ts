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