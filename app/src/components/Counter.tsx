import React, {useReducer} from 'react'
import { counterReducer, counterInitialState } from '../reducers/counter.reducer'

function Counter() {

    const [state, dispatch] = useReducer(counterReducer, counterInitialState)

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