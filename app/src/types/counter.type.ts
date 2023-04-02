export type stateStructure = {
    count : number
}

export type types = 'increment' | 'decrement'  | 'reset'

export type actionStructure = {
    type : types, // define the type of action
    payload ? : number // some information can send 
}
