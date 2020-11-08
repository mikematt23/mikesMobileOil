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
    justifyContent : "center",
    marginTop:"2%"
  },
 
  div :{
    height: "70vh",
    width: "45%",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    backgroundColor: "White",
    borderRadius : "5%",
    backgroundImage : "url(https://media.canadianunderwriter.ca/uploads/2018/01/Car-Wash.jpg)",
    backgroundRepeat : "no-repeat",
    backgroundSize : "95%",
  },
  div2:{
    height: "100vh",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "center",
    backgroundColor: "rgb(44,204,235)"
  
  },
  button:{
    backgroundColor:"rgb(245,0,87)",
    color:" rgb(44,204,235)",
    marginLeft:"4%",
  },
  left:{
    backgroundColor:"rgb(245,0,87)",
    color:" rgb(44,204,235)",
  },
  h1:{
    color:"rgb(245,0,87)"
  }
});



const Login = (props)=>{
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
    props.users.find((user)=>{
      if(user.email === payload && user.password === payload2){
        name = user.firstName
        props.setUser(user)
        props.logIn()
        document.cookie = 'loggedIn=true;max-age=60*1000' 
      } else if(user.email != payload){
         setMessage("No User")
      }
      else{
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
           <div> 
           <h1>Welcome To Wax-On</h1>
           <h3 className={classes.h1}>Please Login or Sign-up to Continue</h3>
           <Container className ={classes.root}>
             <TextField onChange = {handleTextChange}></TextField>
             <TextField type ="password" onChange={handlePasswordChange}></TextField>
             <Container className ={classes.root2}>
               <Link to = "/signUp">
                 <Button className={classes.left}>Sign-up</Button>
              </Link>
               <Button variant="outlined" className = {classes.button} onClick = {handleSubmit}><Link to ={`/user`}>LogIn</Link></Button>
             </Container>
             <h3>{message}</h3>
           </Container>
           </div>
          </div>
      </div>
      </div>
    )
}

export default Login