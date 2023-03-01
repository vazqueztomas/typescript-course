import { ReactNode, useState } from "react";

import React from 'react'

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>,
  children: ReactNode,
}

const Counter = ({setCount, children}: CounterProps) => {
  
  return (
    <>
    {children}
    <button onClick = { () => setCount(prev => prev + 1)}> + </button>
    <button onClick = { () => setCount(prev => prev - 1)}> - </button>
    </>
  )
}

export default Counter