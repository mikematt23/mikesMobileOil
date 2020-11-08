import React from "react"
import Nav from "../containers/Nav"
import { Container } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

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
    backgroundColor: "rgb(44,204,235)"
  
  }
});

const Ordered =()=>{
  const classes = useStyles();
  return (
    <div>
      <Nav/>
      <div className ={classes.div2}>
        <div className={classes.div} >
          <h1>Thank You for your purchace</h1>
          <h3>Please Login or Sign-up to Continue</h3>
           <Container className ={classes.root}>
           </Container>
        </div>
      </div>
    </div>
  )
}

export default Ordered