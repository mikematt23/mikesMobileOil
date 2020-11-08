import React, {useState} from 'react'
import Nav from "../containers/Nav"
import { makeStyles } from '@material-ui/core/styles'
import {Container, Button} from "@material-ui/core"
import { Link } from 'react-router-dom'
import BasicDatePicker from '../containers/DatePicker'



const useStyles = makeStyles({
  root :{
    display : "flex",
    alignItems : "center",
    justifyContent :"center",
    backgroundColor : "rgb(44,204,235)",
    height : "100vh"
  },
  root2:{
    backgroundColor : 'white',
    height : "75%",
    width:"45%",
    borderRadius:"5%",
    backgroundImage : "url(https://cdn4.vectorstock.com/i/1000x1000/43/18/water-splash-vector-1294318.jpg)",
    backgroundRepeat : "no-repeat",
  },
  div : {
    height : "100%"
  },
  container:{
    height :'10%',
    width: "10%"
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto auto auto'
  },
  gridItem:{
    border : "solid 1px black",
    height :"60%",
    width : "60%"
  },
  button:{
    color:"rgb(245,0,87)"
  }
})

const User = (props)=>{
  React.useEffect(()=>{
    props.importingPackage()
  },[])
const classes = useStyles()
  return(
  <div className = {classes.root}>
    <Nav/>
    <div className = {classes.root2}>
       Hello {props.loggedInUser.firstName}
          <div>
          <BasicDatePicker/>
          </div>  
    </div>
   
  </div>
  )
}

export default User