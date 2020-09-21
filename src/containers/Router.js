import Router from "../Router"
import {connect} from "react-redux"

const mapStateToProps = (state)=>{
  return{
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps)(Router)