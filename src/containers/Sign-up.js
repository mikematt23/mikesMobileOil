import {connect} from 'react-redux'
import SignUp from "../components/Sign-up"
import {importUser} from '../redux/actions'

const mapStateToProps = (state)=>{
  return {
    users : state.users
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    importUser : ()=> dispatch(importUser()),
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignUp)