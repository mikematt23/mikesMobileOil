import React from "react"
import Nav from "../containers/Nav"
import { makeStyles } from '@material-ui/core/styles'
import { Paper ,Container, Button} from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



const useStlye = makeStyles({
  root :{
     backgroundColor : "rgb(236,225,90)",
     height : "100vh",
     display : "flex",
     justifyContent : 'center',
     alignItems: "center"
  },
  root2: {
    height : "70vh",
    width : "60%",
    backgroundColor :"white"
  }
})

const SelectedDay = (props)=>{
  console.log(props.loggedInUser)
  let user = props.loggedInUser
  const [value, setValue] = React.useState(0);
 const [time,setTime] = React.useState(0)

  const handleChange = (event)=>{
    setValue(event.target.value)
  }
  const handleTimeChange= (event)=>{
    setTime(event.target.value)
  }

  const placeOrder = ()=>{
    let url = `http://localhost:5000/orders/${user.user_id}/${value}/${day}/${time}`
    fetch(url,{method : "POST"})
    console.log(url)
  }
  const classes = useStlye()
  console.log(props.match.params)
  let day = props.match.params.day
  console.log(value)
  return(
    <div >
      <Nav/>
      <div className = {classes.root}>
        <div className = {classes.root2} >
           <h1>{day}</h1>
             
                <FormControl component="fieldset">
                <FormLabel component="legend">Service Level</FormLabel>
                <RadioGroup aria-label="Service" name="gender1" value={value} onChange={handleChange}>
                  {props.Package.map((p)=>{
                    return(
                      <FormControlLabel value={p.package_id} control={<Radio />} label= {p.package_name} />
                    )
                  })}
                </RadioGroup>
              </FormControl>
              <FormControl component="fieldset">
                <FormLabel component="legend">Time</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleTimeChange}>
                    <FormControlLabel value="8am" control={<Radio />} label="8am" />
                    <FormControlLabel value="9am" control={<Radio />} label="9am" />
                    <FormControlLabel value="10am" control={<Radio />} label="10am" />
                    <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                  </RadioGroup>
              </FormControl>
             <h4>{value}</h4>
             <h4>{time}</h4>
             <Button onClick = {placeOrder}>Place Order</Button>
        </div>
      </div>
    </div>
    
  )
}

export default SelectedDay