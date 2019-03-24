import * as types from '../constants/ActionTypes';

export default function data(state = [], action) {
    switch (action.type) {
        case types.LOAD_PHONEBOOKS_SUCCESS:
        return action.phonebook

        case types.LOAD_PHONEBOOKS_FAILURE:
        return state

        case types.ADD_DATA:
        return [
            {
                id: action.id,
                name: action.name,
                phone: action.phone
            },
            ...state
        ]

        case types.ADD_PHONEBOOKS_SUCCESS:
        let addData = state
        let add = addData.map(x => {
            if (x.id === action.id) {
                x.name = action.name
                x.phone = action.phone
            }
            return x
        })
        return add

        case types.EDIT_DATA:
        return state.map(
            data => data.id === action.id ? 
            Object.assign({}, data, {name: action.name, phone: action.phone})
            : 
            data
        )

        case types.EDIT_PHONEBOOKS_SUCCESS:
        let editData = state
        let edit = editData.map(x => {
            if (x.id === action.id) {
                x.name = action.name
                x.phone = action.phone
            }
            return x
        })
        return edit

        case types.DELETE_DATA:
        return state.filter(data => data.id !== action.id)

        default:
        return state
    }
}