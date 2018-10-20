import React from 'react'

import LoginLayout from '../components/login/loginLayout'
import { socket } from '../utils/socket/socket'
import { connect } from 'react-redux'

class Login extends React.Component {

  componentDidMount() {
    socket.on('login-success', (user) => {
      this.props.dispatch({ type: 'LOGIN', payload: { log: true } })
      this.props.dispatch({ type: 'ADD_CURRENT_USER', payload: user })

      if (user.admin) {
        window.location.href = '/admin'
      } else {
        window.location.href = '/challenger'
      }
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    socket.emit('login', e.target.user.value)
  }

  render(){
    return <LoginLayout submit={this.onSubmit} />
  }
}

export default connect()(Login)
