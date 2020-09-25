import {connect} from 'react-redux'
import Login from "../components/Login"
import {importUser,LoggingIn,setUser,importPackage} from '../redux/actions'


const mapStateToProps = (state)=>{
  return{
    loggedIn: state.loggedIn,
    user: state.user,
    loggedInUser : state.loggedInUser,
    users : state.users
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    importUser : ()=> dispatch(importUser()),
    logIn : ()=>dispatch(LoggingIn()),
    setUser: (user)=> dispatch(setUser(user)),
 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)