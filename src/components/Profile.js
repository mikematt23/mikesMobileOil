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
    alignItems: "center",
    
  },
  root2: {
    height : "90vh",
    width : "45%",
    backgroundColor :"white",
    borderRadius:"5%",
    backgroundImage : "url(https://cdn4.vectorstock.com/i/1000x1000/43/18/water-splash-vector-1294318.jpg)",
    backgroundRepeat : "no-repeat",
    display:"flex",
    flexDirection:'column',
    marginTop:"2%"
  },
  button:{
    backgroundColor:"rgb(245,0,87)",
    color:" rgb(44,204,235)",
    marginLeft:"4%",
    marginTop:"2%"
  },
  flexMenu :{
    display:"flex",
    flexDirection:'column',
    justifyContent : 'center',
    alignItems: "center",
  },
  h1:{
    color:"rgb(245,0,87)"
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
     let url = `https://aca-michaels-backend-server.herokuapp.com/updateAddress/${userID}/${address}/${town}/${state}`
     fetch(url,{method:"PUT"})
     setMessage("address Changed")
   }
 }

 const submitPasswordChange = ()=>{
   if(password != confirmPassword){
     setMessage2("Password Doesn't match")
   }else{
     let url =`https://aca-michaels-backend-server.herokuapp.com/updatePassword/${userID}/${password}`
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
               <h2 className = {classes.h1}>Please Enter Your Password To Continue</h2>
               <TextField type ="password" onChange = {checkPassword}/>
               <Button className ={classes.button} onClick = {passwordMenu}>Check Password</Button>
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
             <Container className = {classes.flexMenu}>
               <Container className ={classes.flexMenu}>
                 <h3>Your Address: {props.loggedInUser.address}</h3>
                 <TextField placeholder = "Address" onChange = {captureAddress}/>
                 <TextField placeholder = "Town" onChange = {captureTown}/>
                 <TextField placeholder = "State" onChange = {captureState} />
                 <Button className ={classes.button} onClick = {submitAddressChange} >Submit</Button>
                 <h6>{message}</h6>
               </Container>
               <Button className ={classes.button} onClick = {componentReturn}>CLose</Button>
             </Container>
             <Container className = {classes.flexMenu}>
               <h2>Please Enter Your New Password</h2>
               <TextField type ="password" onChange = {capturePassword}/>
               <TextField type ="password" onChange = {captureConfirm}/>
               <Button className={classes.button} onClick ={submitPasswordChange}>Change Password</Button>
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
             <Container className = {classes.flexMenu}>
               <Container className = {classes.flexMenu}>
                 <h2>Click To Change Address</h2>
                 <Button className={classes.button}  onClick = {componentReturn}>OPEN</Button>
               </Container>
             </Container>
             <Container className={classes.flexMenu}>
               <h2>Please Enter Your New Password</h2>
               <TextField type ="password" onChange = {capturePassword}/>
               <TextField type ="password" onChange = {captureConfirm}/>
               <Button className={classes.button} onClick ={submitPasswordChange}  >Change Password</Button>
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