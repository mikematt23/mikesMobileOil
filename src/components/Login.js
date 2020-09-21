import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  TextField,
  Button 
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import Nav from "../containers/Nav"
import User from "../containers/User"




const useStyles = makeStyles({
  root: {
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "center"
  },
  root2:{
    display: "flex",
    alignItems : "center",
    justifyContent : "center"
  },
 
  div :{
    height: "70vh",
    width: "45%",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    backgroundColor: "White",
    borderRadius : "5%",
    backgroundImage : "url(https://troyautocare.com/wp-content/uploads/2019/06/oil-change-500pxH.jpg)"
  },
  div2:{
    height: "100vh",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "center",
    backgroundColor: "rgb(236,225,90)"
  
  }
});



const Login = (props)=>{
  console.log(props)
  React.useEffect(()=>{
    props.importUser()
  },[])
  const [user,setUser] = useState('')
  const [message,setMessage] = useState('')
  const [password,setPassword] = useState('')


  const handleTextChange = (event)=>{
    setUser(event.target.value)
  }
  const handlePasswordChange = (event)=>[
     setPassword(event.target.value)
  ]
 
  const handleSubmit = (e)=>{
    let name
    e.preventDefault()
    const payload = user
    const payload2 = password
    console.log(props.users)
    props.users.find((user)=>{
      if(user.email === payload && user.password === payload2){
        name = user.firstName
        console.log(user)
        props.setUser(user)
        props.logIn()
        console.log(props.loggedInUser)
        document.cookie = 'loggedIn=true;max-age=60*1000'
        return name
      }else{
        console.log('no user')
        return setMessage("Incorrect user name or password")
      }
    })
   
  }
  const classes = useStyles();
    return(
      <div>
        <Nav/>
         <div className ={classes.div2}>
         <div className={classes.div} >
           <h1>Welcome To Mike Mobiles</h1>
           <h3>Please Login or Sign-up to Continue</h3>
           <Container className ={classes.root}>
             <TextField onChange = {handleTextChange}></TextField>
             <TextField type ="password" onChange={handlePasswordChange}></TextField>
             <Container className ={classes.root2}>
               <Link to = "/signUp">
                 <h4>Sign-up</h4>
              </Link>
               <Button onClick = {handleSubmit}><Link to ={`/user`}>LogIn</Link></Button>
             </Container>
             <h3>{message}</h3>
           </Container>
          </div>
      </div>
      </div>
    )
}

export default Login