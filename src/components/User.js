import React from 'react'
import Nav from "../containers/Nav"

const User = (props)=>{
  console.log(props)
  return(
  <div>
    <Nav/>
    Hello {props.loggedInUser.firstName}</div>
  )
}

export default User