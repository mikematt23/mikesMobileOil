import Info from "../components/Info"
import {connect} from "react-redux"

const mapStateToProps = (state)=>{
  return{
    loggedIn : state.loggedIn
  }
}

export default connect(mapStateToProps)(Info)