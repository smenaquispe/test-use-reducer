import { stateStructure, actionStructure } from "../types/counter.type"

// initial state
export const counterInitialState : stateStructure = {count : 0}

// necessary declare reducer function outside
export const counterReducer = (state : stateStructure, action : actionStructure) : stateStructure => {

    const payload = action.payload? action.payload : 1

    switch(action.type) {
        case 'increment' : return {count : state.count + payload}
        case 'decrement' : return {count : state.count - payload}
        case 'reset' : return counterInitialState
        default : return state
    }
}