 const user = (users)=>{
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
      console.log(data)
      dispatch(user(data))
    })
  }
}
const Package = (level)=>{
  return{
    type :"FETCH_PACKAGE",
    value : level
  }
}
export const importPackage = ()=>{
  return(dispatch)=>{
    fetch('http://localhost:5000/package')
    .then((response)=>{
      return response.json()
    },)
    .then((data)=>{
      console.log(data)
      dispatch(Package(data))
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

export const setMonth = (month)=>{
  return{
    type : "SET_MONTH",
    value: month
  }
}

export const setDay = (day)=>{
  return {
    type :"SET_DAY",
    value:day
  }
}

export const setUser = (users)=>{
  return{
    type : "SET_USER",
    value : users
  }
}