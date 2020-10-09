
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
    flexDirection: "column"
  }
})

function BasicDatePicker(props) {
  let d = new Date()
  let userID = props.user.user_id
  console.log(props)
  const [selectedDate, handleDateChange] = useState(new Date());
  const [level,setLevel] = useState(0)
  const [time, setTime] = useState(new Date())

  const handleChange = (event)=>{
    setLevel(event.target.value)
  }

  const placeOrder = ()=>{
    let datePicked = selectedDate.toDateString()
    let selectedTime = time.toTimeString()
    console.log(datePicked)
    let Now = new Date()
    let url = `http://localhost:5000/orders/${userID}/${level}/${datePicked}/${selectedTime}/${Now}`
    fetch(url,{method : "POST"})
    console.log(url)
  }

 console.log(selectedDate)
 const classes = useStlye()
  return (
    <div className = {classes.root}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Fragment>
        <DatePicker
        label="Clearable"
        clearable
        value={selectedDate}
        onChange={handleDateChange}
      />
          <TimePicker autoOk label="12 hours" value={time} onChange={setTime} />
        </Fragment>
      </MuiPickersUtilsProvider>
      <FormControl component="fieldset">
        <FormLabel component="legend">Time</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" >
            <FormControlLabel value = '1' control={<Radio />} label="Basic" onClick = {handleChange}/>
            <FormControlLabel value= '2' control={<Radio />} label="Advanced" onClick = {handleChange}/>
            <FormControlLabel value= '3' control={<Radio />} label="Premium"  onClick = {handleChange}/>        
          </RadioGroup>
        </FormControl>
        <Link to = "/ordered" >
          <Button onClick = {placeOrder}>Submit</Button>
        </Link>
        
    </div>
  );
}

export default BasicDatePicker;