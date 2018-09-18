import User from '../model/User'
import { LOGIN, SIGN_UP } from '../types/userType'

export default function userReducer(state = null, action){
  switch(action.type){
    case LOGIN:
      console.log("Reducer -- LOGIN");
      return state
    break;
    case SIGN_UP:
      console.log("Reducer -- SIGN_UP");
      return state;
    break;
    default:
      return state;
  }
}