import React from 'react'
import PropouseLayout from '../components/propouse/propouseLayout'
import { socket } from '../utils/socket/socket'

export default class Propouse extends React.Component {

  componentDidMount () {
    socket.on('challenge', (data) => {
      console.log(data)
    })
  }

  onSubmit = (e) => {
    console.log('submit')
    e.preventDefault()
    const title = e.target.title.value
    const description = e.target.description.value
    const input = e.target.input.value
    const ouput = e.target.ouput.value

    socket.emit('create', {
      title,
      description,
      input,
      ouput
    })
  }

  render () {
    return <PropouseLayout submit={this.onSubmit} />
  }
}
