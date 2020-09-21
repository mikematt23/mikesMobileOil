import React from "react"
import Nav from '../containers/Nav'
import {Container} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root :{
    backgroundColor : 'red',
    height : "100vh"
  }
})

const Info = (props)=>{
  const classes = useStyles();
  console.log(props)
  return (
    <Container>
      <Nav/>
      <div className ={classes.root}>
        <h1>here</h1>
      </div>
    </Container>
  )
}


export default Info