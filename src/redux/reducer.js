import {combineReducers} from "redux"

const loggedIn = (state = false, action)=>{
  switch(action.type){
    case "LOG_IN":
      let truth = true
      return truth
    case "LOG_OUT":
      let isFalse = false
      return isFalse  
    default:
      return state
  }
}
const users = (state = [], action)=>{
  switch(action.type){
    case "FETCH_USERS":
      return action.value  
    default :
      return state
  }
}
const level = (state = [],action)=>{
  switch(action.type){
    case "FETCH_PACKAGE":
      return action.value
    default : 
      return state  
  }
}
const month = (state = "", action)=>{
  switch(action.type){
    case "SET_MONTH":
       return action.value
    default :
      return state    
  }
}

const day = (state = 0,action)=>{
  switch(action.type){
    case "SET_DAY":
      return action.value
    default :
       return state
  }
}

const user = (state = '',action)=>{
  switch(action.type){
    
    default: 
      return state
  }
}

const loggedInUser = (state = {},action)=>{
  switch(action.type){
    case 'SET_USER':
      return action.value
    default :
    return state
  }
}

export default combineReducers({loggedIn, user, loggedInUser,users,level,month,day})