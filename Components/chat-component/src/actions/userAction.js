import { LOGIN, SIGN_UP } from '../types/userType';

export function login(email, password){
    return {
        type: LOGIN,
        email,
        password
    }
}

export function signUp(name, lastname, email, password){
    return {
        type: SIGN_UP,
        name,
        lastname,
        email,
        password
    }
}