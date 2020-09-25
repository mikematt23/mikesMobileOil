import React from "react"
import Nav from '../containers/Nav'
import {Container} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root :{
    backgroundColor : "rgb(236,225,90)",
    height : "100vh"
  }
})

const Info = (props)=>{
  const classes = useStyles();
  return (
    <div  className ={classes.root}>
      <Nav/>
      <div>
        <h1>here</h1>
      </div>
    </div>
  )
}


export default Info