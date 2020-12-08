
import React, { Fragment, useState } from "react";
import {TimePicker, DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns'
import {Button} from "@material-ui/core"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'


const useStlye = makeStyles({
  root:{
    display : "flex",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center"
  },
  root2:{
    marginBottom:"1%",
    borderBottom:"dashed 1px rgb(44,204,235)"
  },
  button:{
    backgroundColor:"rgb(245,0,87)",
    color:" rgb(44,204,235)"
  },
  label:{
    color:"rgb(245,0,87)"
  }
})

function BasicDatePicker(props) {
  let d = new Date()
  let userID = props.user.user_id
  console.log(userID)

  const [selectedDate, handleDateChange] = useState(new Date());
  const [level,setLevel] = useState(0)
  const [time, setTime] = useState(new Date())
  const [message, setMessage] = useState('')



  const handleChange = (event)=>{
    setLevel(event.target.value)
  }

  const placeOrder = ()=>{
    let datePicked = selectedDate.toDateString()
    let selectedTime = time.toTimeString()
    let Now = new Date()
    if(selectedTime >= "19:00:00 GMT-0500" || selectedTime <= "07:00:00 GMT-0500"){
      setMessage("Appointment Must Be Scheduled After 7:00 AM And Before 7:00 PM")
    } else if(level === 0){
     setMessage("You Must Choose A Service Level")
    } else {
      setMessage("Appoinment Has Been Set!")
      let url = `https://aca-michaels-backend-server.herokuapp.com/orders/${userID}/${level}/${datePicked}/${selectedTime}/${Now}`
      fetch(url,{method : "POST"})
    }
  }

 const classes = useStlye()
  return (
    <div className = {classes.root}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Fragment >
          <div className={classes.root2}>
            <h5 className={classes.label}>Please Pick The Day </h5>
            <DatePicker
              value={selectedDate}
              onChange={handleDateChange}
            />  
          </div>
          <div className={classes.root2}>
            <h5 className={classes.label}>Please Select the Time Of Wash</h5>
            <TimePicker 
              autoOk label="12 hours" 
              value={time} 
              onChange={setTime} 
            />
          </div>
        </Fragment>
      </MuiPickersUtilsProvider>
      <div className={classes.root2}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Time</FormLabel>
          <RadioGroup aria-label="service Level" name="gender1" >
            <FormControlLabel value = '1' control={<Radio />} label="Basic - $35" onClick = {handleChange}/>
            <FormControlLabel value= '2' control={<Radio />} label="Advanced - $50" onClick = {handleChange}/>
            <FormControlLabel value= '3' control={<Radio />} label="Premium - $75"  onClick = {handleChange}/>        
          </RadioGroup>
        </FormControl>
      
      </div>
      <Button variant= "outlined" className = {classes.button} onClick = {placeOrder}>Submit</Button>
        <h4>{message}</h4>
    </div>
  );
}

export default BasicDatePicker;