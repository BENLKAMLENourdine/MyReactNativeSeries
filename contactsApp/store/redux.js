import { createStore } from 'redux'
import reducer from './reducer'

import { updateContact } from './actions'
//default state
const DEFAULT_STATE = { user: {}, contacts: [] }

//store
const store = createStore(reducer, DEFAULT_STATE)


//testing
// store.dispatch(updateUser({ foo: 'foo' }))
store.dispatch(updateContact({ name: 'nourdine', phone: '085879390' }))
store.dispatch(updateContact({ name: 'me', phone: '085879390' }))

export default store