 const importAction = (users)=>{
  return{
    type: "FETCH_USERS",
    value: users 
  }
}

export const importUser = ()=>{
  return (dispatch)=>{
    fetch('http://localhost:5000/users')
    .then((res)=>{
      return res.json()
    }) .then((data)=>{
      dispatch(importAction(data))
    })
  }
}

export const LoggingIn = ()=>{
  return {
    type : "LOG_IN",
    value: true
  }
}

export const logOut = ()=>{
  return {
    type: "LOG_OUT",
    value : false
  }
}

export const setUser = (users)=>{
  return{
    type : "SET_USER",
    value : users
  }
}