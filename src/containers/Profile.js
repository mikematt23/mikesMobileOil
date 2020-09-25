import {connect} from 'react-redux'
import Profile from "../components/Profile"


const mapStateToProps = (state)=>{
   return {
    loggedInUser : state.loggedInUser
   }
}


export default connect(mapStateToProps)(Profile)