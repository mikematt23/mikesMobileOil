import React from "react"
import Nav from "../containers/Nav"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root :{
    backgroundColor : "rgb(236,225,90)",
    height : "100vh",
    display : "flex",
    justifyContent : 'center',
    alignItems: "center"
  },
  root2: {
    height : "70vh",
    width : "60%",
    backgroundColor :"white"
  }
})


const Profile = (props)=>{
  console.log(props)
  const classes = useStyles()
  return(
    <div>
      <Nav/>
       <div className = {classes.root}>
         <div className = {classes.root2}>
           <h1> Welcome Back {props.loggedInUser.firstName}</h1>
           <h2>Please Click on a feild to update it</h2>
           <h3>address: {props.loggedInUser.address}</h3>
         </div>
       </div>
      Profile
    </div>
  )
}


export default Profile