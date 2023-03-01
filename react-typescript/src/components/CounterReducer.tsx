import { ReactNode,  Reducer,  useReducer } from "react"

type ChildrenType = {
  children: (num: number) => ReactNode,
}

const initialState = {
  count: 0
}

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT
}


type ReducerAction = {
  type: REDUCER_ACTION_TYPE,
}

const reducer = (state: typeof initialState, action: ReducerAction): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return {...state, count: state.count + 1}
    case REDUCER_ACTION_TYPE.DECREMENT:
      return {...state, count: state.count - 1}
    default:
      throw new Error('Error!')

  }
}

const CounterReducer = ({children}: ChildrenType) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const increment = () => dispatch({type: REDUCER_ACTION_TYPE.INCREMENT})
  const decrement = () => dispatch({type: REDUCER_ACTION_TYPE.DECREMENT})
  return (
    <>
      <h2>{state.count}</h2>
      <button onClick = {increment}>+</button>
      <button onClick = {decrement}>-</button>
    </>
  )
}

export default CounterReducer