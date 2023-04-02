import React, {useReducer} from 'react'

type stateStructure = {
    count : number
}

type types = 'increment' | 'decrement'  | 'reset'

type actionStructure = {
    type : types, // define the type of action
    payload ? : number // some information can send 
}

// necessary declare reducer function outside
const reducer = (state : stateStructure, action : actionStructure) : stateStructure => {

    const payload = action.payload? action.payload : 1

    switch(action.type) {
        case 'increment' : return {count : state.count + payload}
        case 'decrement' : return {count : state.count - payload}
        case 'reset' : return initialState
        default : return state
    }
}

// initial state
const initialState : stateStructure = {count : 0}

function Counter() {

    const [state, dispatch] = useReducer(reducer, initialState)
    return  (
        <div className="counter">
            <h2>Counter</h2>
            <button className='+' onClick={() => dispatch({type: 'increment'})}>+</button>
            <button className='-' onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button className='+' onClick={() => dispatch({type:'increment', payload: 5})}>+5</button>
            <button className='-' onClick={() => dispatch({type: 'decrement', payload: 5})}>-5</button>
            <button className='reset' onClick={() => dispatch({type: 'reset'})}>0</button>
            <h3>{state.count}</h3>
        </div>
    )
}

export default Counter;