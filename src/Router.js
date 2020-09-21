import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Login from './containers/Login'
import Info from "./containers/info"
import User from "./containers/User"
import SignUp from "./components/Sign-up"
import Profile from "./components/Profile"
import cookie from 'cookie'


  
const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
      <Route
      {...rest}
      render={(props) => checkAuth()
          ? <Component {...props} />
          : <Redirect to="/" />}
      />
  )
}

const Router = (props)=>{

  console.log(props)
  return(
    <Switch>
      <Route path = '/' exact component ={Login}/>
      <Route path = '/Info' component = {Info} />
      <Route  path = "/signUp" component ={SignUp} />
      <ProtectedRoute path = '/user' component={User} />
      <ProtectedRoute path = "/profile" component ={Profile} />
    </Switch>
  )
}

export default Router