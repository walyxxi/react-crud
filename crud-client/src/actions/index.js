import * as types from '../constants/ActionTypes';
import request from 'superagent';

const API_URL = 'http://localhost:3002/api/phonebook/'

function loadPhoneBookFailure() {
    return {type: types.LOAD_PHONEBOOKS_FAILURE}
}

function loadPhoneBookSuccess(phonebook) {
    return {type: types.LOAD_PHONEBOOKS_SUCCESS, phonebook}
}

export function loadPhoneBook() {
    return dispatch => {
        return request
        .get(`${API_URL}`)
        .set('Accept', 'application/json')
        .end((err, res) => {
            if (err) {
                console.log(err);
                dispatch(loadPhoneBookFailure())
            } else {
                dispatch(loadPhoneBookSuccess(res.body))
            }
        })
    }
}

export function addData(id, name, phone) {
    return {type: types.ADD_DATA, id, name, phone}
}

function addPhoneBookFailure() {
    return {type: types.ADD_PHONEBOOKS_FAILURE}
}

function addPhoneBookSuccess(phonebook) {
    return {type: types.ADD_PHONEBOOKS_SUCCESS, phonebook}
}

export function addPhoneBook(name, phone) {
    let id = Date.now()
    return dispatch => {
        dispatch(addData(id, name, phone))
        return request
        .post(`${API_URL}`)
        .type('form')
        .send({id})
        .send({name})
        .send({phone})
        .end((err, res) => {
            if (err) {
                console.log(err);
                dispatch(addPhoneBookFailure())
            } else {
                dispatch(addPhoneBookSuccess(res.body))
            }
        })
    }
}

export function editData(id, name, phone) {
    return {type: types.EDIT_DATA, id, name, phone}
}

function editPhoneBookFailure() {
    return {type: types.EDIT_PHONEBOOKS_FAILURE}
}

function editPhoneBookSuccess(phonebook) {
    return {type: types.EDIT_PHONEBOOKS_SUCCESS, phonebook}
}

export function editPhoneBook(id, name, phone) {
    return dispatch => {
        dispatch(editData(id, name, phone))
        return request
        .put(`${API_URL}${id}`)
        .send({name})
        .send({phone})
        .end((err, res) => {
            if (err) {
                console.log(err);
                dispatch(editPhoneBookFailure())
            } else {
                dispatch(editPhoneBookSuccess(res.body))
            }
        })
    }
}

export function deleteData(id) {
    return {type: types.DELETE_DATA, id}
}

function deletePhoneBookFailure() {
    return {type: types.DELETE_PHONEBOOKS_FAILURE}
}

function deletePhoneBookSuccess(phonebook) {
    return {type: types.DELETE_PHONEBOOKS_SUCCESS, phonebook}
}

export function deletePhoneBook(id) {
    return dispatch => {
        dispatch(deleteData(id))
        return request
        .delete(`${API_URL}${id}`)
        
        .end((err, res) => {
            if (err) {
                console.log(err);
                dispatch(deletePhoneBookFailure())
            } else {
                dispatch(deletePhoneBookSuccess(res.body))
            }
        })
    }
}