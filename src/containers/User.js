import User from "../components/User"
import {connect} from "react-redux"
import {importPackage} from "../redux/actions"
 

const mapStateToProps = (state)=>{
  return{
    loggedInUser : state.loggedInUser,
    Package : state.level

  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
     importingPackage : ()=>dispatch(importPackage()),
    //  setDay : (day)=> dispatch(setDay(day)),
    //  setMonth : (month)=> dispatch(setMonth(month))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(User)