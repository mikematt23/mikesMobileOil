import React, {useState} from 'react'
import Nav from "../containers/Nav"
import { makeStyles } from '@material-ui/core/styles'
import {Container, Button} from "@material-ui/core"
import { Link } from 'react-router-dom'



const useStyles = makeStyles({
  root :{
    display : "flex",
    alignItems : "center",
    justifyContent :"center",
    backgroundColor : "rgb(236,225,90)",
    height : "100vh"
  },
  root2:{
    backgroundColor : 'white',
    height : "80%",
    width:"70%"
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
  }
})

const User = (props)=>{
  React.useEffect(()=>{
    props.importingPackage()
  },[])
  let d = new Date();
  let month = new Array();
  let currentDay = d.getDate()
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August"; 
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var n = month[d.getMonth()];
 let days
 let day = []
  const classes = useStyles()
    if(n === "April" || n=== "June"||n==="September"|| n=== "November"){
      days = 30
    }else if(n==="February"){
      days = 28
    }else{
      days = 31
    }
    for(let i = 0; i<days;i++){
      let d = i+1
      day.push(d)
    }

  return(
  <div className = {classes.root}>
    <Nav/>
    <div className = {classes.root2}>
       Hello {props.loggedInUser.firstName}
       <h1>{n}</h1>
       <div className ={classes.gridContainer}>{day.map((d,idx)=>{
          return(
            <Link key = {idx} onClick={props.setDay} to = {`/day/${d}`}>
              <h3 className = {classes.gridItem} >{d}</h3>
            </Link>
          
          )
       })}</div>
    </div>
    </div>
  )
}

export default User