import { useMemo } from "react";

type fibFunction = (n : number) => number

const fib : fibFunction = (n: number) => {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2);
}

const myNum : number = 37;

const UseMemoComponent = () => {
  const result = useMemo<number>(() => fib(myNum),[myNum])
  return (
    <>
      <h2>{result}</h2>
    </>
  )
}

export default UseMemoComponent;