import React from "react"
import Nav from '../containers/Nav'
import {Container} from "@material-ui/core"
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
    height: "80vh",
    width: "45%",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    backgroundColor: "White",
    borderRadius : "5%",
    marginTop : "5%",
    backgroundImage : "url(https://cdn4.vectorstock.com/i/1000x1000/43/18/water-splash-vector-1294318.jpg)",
    backgroundRepeat : "no-repeat",
  
  },
  div2:{
    height: "100vh",
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
    justifyContent : "center",
    backgroundColor: "rgb(44,204,235)"
  
  },
  div3:{
    height: "50%",
    width:"50%",
    overflow:"auto",
    marginBottom:"2%"
  },
  div4:{
    width:"50%"
  }
});

const Info = (props)=>{
  const classes = useStyles();
    return(
      <div>
        <Nav/>
         <div className ={classes.div2}>
           <div className={classes.div} >
            <h3>WHAT W WE DO?</h3>
            <div className ={classes.div4}>
             <h4>We clean Cars! Does your car look as if it has just been 
               unearthed or gone thru the Baja 1000? Is your interior ground zero for new life? Then let us help wether you have a 
               special occation or just need a clean we will make sure your ridin in style!</h4>
            </div>
            <h3>Our Packages</h3>
            <div className = {classes.div3}>
              <h4>We have 3 diffrent levels that you can choose from. Basic, Advanced and priimum</h4>
              <h3>Basic Will Include</h3>
              <ul>
                  <li>An extiorer Car wash</li>
                  <li>interior clean</li>
              </ul>
              <h3>Advanced Will Include</h3>
              <ul>
                <li>Basic + Rims Cleaned</li>
                <li>Interoir vacuumed</li>
              </ul>
              <h3>Premium Will Include</h3>
              <ul>
                <li>Advanced + extiorer buffed</li>
                <li>interior Shampooed</li>
              </ul>
            </div>
          </div>
         </div>
      </div>
    )
}


export default Info