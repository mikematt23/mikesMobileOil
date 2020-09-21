import {connect} from 'react-redux'
import Nav from "../components/Nav"
import {logOut} from "../redux/actions"


const mapStateToProps = (state)=>{
  return{
    loggedIn: state.loggedIn,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    logOut: ()=> dispatch(logOut())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Nav)