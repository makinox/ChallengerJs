import React from 'react'

import LoginLayout from '../components/login/loginLayout'
import {socket} from '../utils/socket/socket'

export default class Login extends React.Component {
  
  componentDidMount() {
    // console.log(socket)
    // console.log(socket.on('connection'))
  }

  onSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target.user.value)
    console.log(socket.emit('login', e.target.user.value))
  }

  render(){
    return <LoginLayout submit={this.onSubmit} />
  }
} 