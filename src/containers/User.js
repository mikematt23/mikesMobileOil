import User from "../components/User"
import {connect} from "react-redux"


const mapStateToProps = (state)=>{
  return{
    loggedInUser : state.loggedInUser
  }
}

export default connect(mapStateToProps)(User)