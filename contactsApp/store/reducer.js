import { combineReducers } from 'redux'
import { UPDATE_CONTACT, UPDATE_USER } from './actions'
//default state

const merge = (prev, next) => Object.assign({}, prev, next)

//reducers
const contactsReducer = (state = [], action) => {
    if(action.type === UPDATE_CONTACT){
            return [...state, action.payload]
    }

    return state
}
const userReducer = (state = {}, action) => {
    if(action.type === UPDATE_USER){
        return merge(
            state,
            action.payload
        )
    }
    if(action.type === UPDATE_CONTACT){
        return merge(
            state,
            { previousContact: action.payload }
        )
    }
    return state
}

export default combineReducers({
    user: userReducer,
    contacts: contactsReducer
})
