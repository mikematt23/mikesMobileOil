
import BasicDatePicker from "../components/DatePicker"
import {connect } from "react-redux"


const mapStateToProps = (state)=>{
  return{
    user: state.loggedInUser,
    Package : state.level
  }
}

export default connect(mapStateToProps)(BasicDatePicker)

