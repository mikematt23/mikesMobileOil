import React from 'react'
import {AppBar, Button, Toolbar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {Link} from 'react-router-dom'



const useStyles = makeStyles({
   root: {
     display: "flex",
     flexDirection : "row",
     justifyContent: "space-evenly"
   },
   Link: {
     color : "rgb(245,0,87)"
   },
   navBar:{
     backgroundColor: "white",
   }
})


const Nav = (props)=>{
  const handleLogOut = ()=>{
    document.cookie = 'loggedIn=false;max-age= 60*1000'
    props.logOut()
  }
  const classes = useStyles();
  if(props.loggedIn === false){
    return(
        <AppBar className ={classes.navBar} >
          <Toolbar className = {classes.root}>
            <Link to = "/Info">
              <h4 className ={classes.Link}>Our Services</h4>
            </Link>
            <Link to = '/'>
              <h4 className ={classes.Link}>Log-In</h4>
            </Link>
          </Toolbar>
        </AppBar>
    )
  } else {
    return(
    <AppBar className ={classes.navBar}>
    <Toolbar className ={classes.root}>
      <Link to = "/Info">
        <h4 className ={classes.Link}>Our Services</h4>
      </Link>
      <Link to = '/profile'>
         <h4 className ={classes.Link}>Profile</h4>
      </Link>
      <Link to = '/user'>
         <h4 className ={classes.Link}>Home</h4>
      </Link>
      <Link to = '/'>
       <Button onClick={handleLogOut}>Log Out</Button>
      </Link>
    </Toolbar>
    </AppBar>
   )
  }
}

export default Nav