import React, { Fragment, useState } from "react"
import Nav from "../containers/Nav"
import { makeStyles } from '@material-ui/core/styles'
import { Container,TextField,Button } from "@material-ui/core"

const useStyles = makeStyles({
  root :{
    backgroundColor : "rgb(44,204,235)",
    height : "100vh",
    display : "flex",
    justifyContent : 'center',
    alignItems: "center"
  },
  root2: {
    height : "70vh",
    width : "45%",
    backgroundColor :"white",
    borderRadius:"5%"
  }
})


const Profile = (props)=>{
  console.log(props.loggedInUser)
  const classes = useStyles()

  const userID = props.loggedInUser.user_id
  const [address, setAddress] = useState('')
  const [town, setTown] = useState("")
  const [state, setState] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirm] = useState("")
  const [check, setCheck] = useState('')
  const [message,setMessage] = useState('')
  const [message2,setMessage2] = useState('')
  const [number,setNumber] = useState(0)

  const passwordMenu = ()=>{
   if(check === props.loggedInUser.password){
    setNumber(2)
   }else{
     setMessage("Password Is Not Correct")
   }
 }
  const componentReturn = ()=>{
    if(number === 2){
      setNumber(1)
    }else{
      setNumber(2)
    }
  }
  const checkPassword = (event)=>{
    setCheck(event.target.value)
  }
  const captureAddress = (event)=>{
    setAddress(event.target.value)
  }
  const captureTown = (event)=>{
    setTown(event.target.value)
  }
  const captureState = (event)=>{
    setState(event.target.value)
  }
  const capturePassword = (event)=>{
    setPassword(event.target.value)
  }
  const captureConfirm = (event)=>{
    setConfirm(event.target.value)
  }

 const submitAddressChange = ()=>{
   if(address === "" || town === "" || state === ""){
     setMessage("All Fields Must Be Filled Out")
   }else{
     let url = `http://localhost:5000/updateAddress/${userID}/${address}/${town}/${state}`
     fetch(url,{method:"PUT"})
     setMessage("address Changed")
   }
 }

 const submitPasswordChange = ()=>{
   if(password != confirmPassword){
     setMessage2("Password Doesn't match")
   }else{
     let url =`http://localhost:5000/updatePassword/${userID}/${password}`
     setMessage2("Password Changed")
     fetch(url,{method:"PUT"})
   }
 }

  console.log(userID)
  if(number === 0){
    return(
      <div>
        <Nav/>
         <div className = {classes.root}>
           <div className = {classes.root2}>
             <h1> Welcome Back {props.loggedInUser.firstName}</h1>
             <Container>
               <h2>Please Enter Your Password To Continue</h2>
               <TextField onChange = {checkPassword}/>
               <Button onClick = {passwordMenu}>Check Password</Button>
               <h6>{message}</h6>
             </Container>
           </div>
         </div>
        Profile
      </div>
    )
  } else if(number === 1){
    return(
      <div>
        <Nav/>
         <div className = {classes.root}>
           <div className = {classes.root2}>
             <h1> Welcome Back {props.loggedInUser.firstName}</h1>
             <Container>
               <Container>
                 <h3>Your Address: {props.loggedInUser.address}</h3>
                 <TextField placeholder = "Address" onChange = {captureAddress}/>
                 <TextField placeholder = "Town" onChange = {captureTown}/>
                 <TextField placeholder = "State" onChange = {captureState} />
                 <Button onClick = {submitAddressChange} >Submit</Button>
                 <h6>{message}</h6>
               </Container>
               <Button onClick = {componentReturn}>CLose</Button>
             </Container>
             <Container>
               <h2>Please Enter Your New Password</h2>
               <TextField onChange = {capturePassword}/>
               <TextField onChange = {captureConfirm}/>
               <Button>Check Password</Button>
               <h6>{message2}</h6>
             </Container>
           </div>
         </div>
        Profile
      </div>
    )
  }else if(number === 2){
    return(
      <div>
        <Nav/>
         <div className = {classes.root}>
           <div className = {classes.root2}>
             <h1> Welcome Back {props.loggedInUser.firstName}</h1>
             <Container>
               <Container>
                 <h2>Click To Change Address</h2>
                 <Button onClick = {componentReturn}>OPEN</Button>
               </Container>
             </Container>
             <Container>
               <h2>Please Enter Your New Password</h2>
               <TextField onChange = {capturePassword}/>
               <TextField onChange = {captureConfirm}/>
               <Button onClick ={submitPasswordChange}  >Check Password</Button>
               <h6>{message2}</h6>
             </Container>
           </div>
         </div>
        Profile
      </div>
    )
  }
}


export default Profile