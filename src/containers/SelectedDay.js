import React from "react"
import SelectedDay from "../components/SelectedDay"
import  {connect}  from "react-redux"
import {setDay , setMonth} from "../redux/actions"

const mapStateToProps = (state)=>{
  return {
    month : state.month,
    loggedInUser : state.loggedInUser,
    day : state.day,
    Package : state.level
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
     setDay : (day)=> dispatch(setDay(day)),
     setMonth : (month)=> dispatch(setMonth(month))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SelectedDay)