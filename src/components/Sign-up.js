import React, {useState} from "react"
import Nav from "../containers/Nav"
import {
  Container,
  TextField,
  Button 
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

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
  },
  Container:{
    display : "flex",
    flexDirection :"column",
    alignItems: 'center',
    justifyContent : 'center'
  }
})



const SignUp = (props)=>{
  const classes = useStyles()
  const [password,setPassword] = useState('')
  const [confirm,setConfirm] = useState('')
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [address,setAddress] = useState('')
  const [town, setTown] = useState('')
  const [state, setState] = useState('')
  const [message,setMessage] = useState()

  const handlePassword = (event)=>{
    setPassword(event.target.value)
  }
  const handleConfirm = (event)=>{
    setConfirm(event.target.value)
  }
  const handleFirstName = (event)=>{
    setFirstName(event.target.value)
  }
  const handleLastName = (event)=>{
    setLastName(event.target.value)
  }
  const handleEmail = (event)=>{
    setEmail(event.target.value)
  }
  const handleAddress = (event)=>{
    setAddress(event.target.value)
  }
  const handleTown = (event)=>{
    setTown(event.target.value)
  }
  const handleState = (event)=>{
    setState(event.target.value)
  } 
  
  const handleSubmit = (e)=>{
    let date = "Na"
    props.users.every((user)=>{
      console.log(user)
       if(user.email === email){
         console.log("already a user")
           setMessage("already a user")
       }else if(user.email != email && password === confirm){
         if(firstName != ""&& lastName != ""&& address != ""){
           console.log("input filled out")
           let url = `http://localhost:5000/createCustomer/${firstName}/${lastName}/${email}/${password}/${address}/${town}/${state}/${date}`
           console.log(url)
           fetch(url,{method : "POST"})  
          }
       }else{
        console.log("password doesnt match")
        setMessage("Password Doesnt Match")
       }
    })
  }
   return(
     <div>
       <Nav/>
       
       <div className ={classes.root}>
  
     
       <div className ={classes.root2}>
       <h3>{message}</h3>
         <Container className = {classes.Container}>
            <TextField onChange = {handleFirstName}  placeholder = "First Name"></TextField>
            <TextField onChange = {handleLastName}  placeholder = "Last Name" ></TextField>
            <TextField onChange = {handleEmail}  placeholder = "E-mail" ></TextField>
            <TextField onChange = {handlePassword}  placeholder = "Password"></TextField>
            <TextField onChange = {handleConfirm}  placeholder = "Confirm Password"></TextField>
            <TextField onChange = {handleAddress}  placeholder = " Street Address"></TextField>
            <TextField onChange = {handleTown} placeholder = "Town"></TextField>
            <TextField onChange = {handleState} placeholder = "State"></TextField>
            <Link to = '/'>
              <Button onClick = {handleSubmit}>SUBMIT</Button>
            </Link>
              
      
          </Container>
        </div>
      </div>
     </div>
   )
}


export default SignUp