import Counter from "./components/Counter"
import Heading from "./components/Heading"
import { Section } from "./components/Section"
import { useRef, useState } from "react"
import List from "./components/List";
import User from "./components/User";
import UseMemoComponent from "./components/UseMemoComponent";
function App() {
  const [count, setCount] = useState<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  return (
    <>
      <Heading title = {'Hello world with React + Typescript'}/>
      <Section>
        <p>This is a children</p>
        <Counter setCount = {setCount}>Count is {count}</Counter>
        <List items = {['Coffe', 'Wup wup', 'Code']} render = {(item: string)=> <span className = 'gold'>{item}</span>}></List>
        <User/>
        <UseMemoComponent/>
        <input ref = {inputRef} type = 'text'/>
      </Section>
    </>
  )
}

export default App
