import * as types from './ActionTypes';

export function saveNewUser(user){
    return {
        type: types.NEW_USER,
        payload: user
    }
}