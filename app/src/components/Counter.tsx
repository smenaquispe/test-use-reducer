import {useReducer} from 'react'

type stateStructure = {
    count : number
}

type doAction = 'increment' | 'decrement'

type actionStructure = {
    type : doAction
}

// necessary declare reducer function outside
const reducer = (state : stateStructure, action : actionStructure) : stateStructure => {
    switch(action.type) {
        case 'increment' : return {count : state.count + 1}
        case 'decrement' : return {count : state.count - 1}
        default : return state
    }
}

// initial state
const initialState : stateStructure = {count : 0}

function Counter() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const add = () => dispatch({type: 'increment'})
    const substract = () => dispatch({type: 'decrement'})

    return  (
        <div className="counter">
            <h2>Counter</h2>
            <button className='+' onClick={add}>+</button>
            <button className='-' onClick={substract}>-</button>
            <h3>{state.count}</h3>
        </div>
    )
}

export default Counter;