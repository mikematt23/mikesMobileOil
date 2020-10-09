import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Login from './containers/Login'
import Info from "./containers/info"
import User from "./containers/User"
import SignUp from "./containers/Sign-up"
import Ordered from "./components/Ordered"
import Profile from "./containers/Profile"
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
  return(
    <Switch>
      <Route path = '/' exact component ={Login}/>
      <Route path = '/Info' component = {Info} />
      <Route  path = "/signUp" component ={SignUp} />
      <ProtectedRoute path = '/user' component={User} />
      <ProtectedRoute path = "/profile" component ={Profile} />
      <ProtectedRoute path ="/ordered" component = {Ordered}/>
    </Switch>
  )
}

export default Router