// action types
export const UPDATE_CONTACT = 'UPDATE_CONTACT'
export const UPDATE_USER = 'UPDATE_USER'

//actions types
export const updateUser = update => ({
    type: UPDATE_USER,
    payload: update
})
export const updateContact = update => ({
    type: UPDATE_CONTACT,
    payload: update
})
