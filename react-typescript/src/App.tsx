import Counter from "./components/Counter"
import Heading from "./components/Heading"
import { Section } from "./components/Section"
import { useState } from "react"
import List from "./components/List";
function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <Heading title = {'Hello world with React + Typescript'}/>
      <Section>
        <p>This is a children</p>
        <Counter setCount = {setCount}>Count is {count}</Counter>
        <List items = {['Coffe', 'Wup wup', 'Code']} render = {(item: string)=> <span className = 'gold'>{item}</span>}></List>
      </Section>
    </>
  )
}

export default App
