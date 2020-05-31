// action types
const UPDATE_CONTACT = 'UPDATE_CONTACT'
const UPDATE_USER = 'UPDATE_USER'

class Store {

    constructor(reducer, initialState){
        this.reducer = reducer
        this.state = initialState
    }

    getState(){
        return this.state
    }

    dispatch(update){
        this.state = this.reducer(this.state, update)
    }
}

const DEFAULT_STATE = { user: {}, contacts: [] }
const merge = (prev, next) => Object.assign({}, prev, next)


const contactsReducer = (state, action) => {
    if(action.type === UPDATE_CONTACT){
            return [...state, action.payload]
    }

    return state
}
const userReducer = (state, action) => {
    if(action.type === UPDATE_USER){
        return merge(
            state,
            action.payload
        )
    }
    return state
}

const reducer = (state, action) => ({
    user: userReducer(state.user, action),
    contacts: contactsReducer(state.contacts, action)
})

//actions
const updateUser = update => ({
    type: UPDATE_USER,
    payload: update
})
const updateContact = update => ({
    type: UPDATE_CONTACT,
    payload: update
})

//store
const s = new Store(reducer, DEFAULT_STATE)
console.log(s.getState())
s.dispatch(updateUser({ foo: 'foo' }))
s.dispatch(updateContact({ name: 'nourdine', phone: '085879390' }))
s.dispatch(updateContact({ name: 'me', phone: '085879390' }))
console.log(s.getState())