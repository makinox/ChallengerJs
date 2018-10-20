import React from 'react'
import PropouseLayout from '../components/propouse/propouseLayout'

export default class Propouse extends React.Component {

  onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.title.value)
    console.log(e.target.description.value)
    console.log(e.target.input.value)
    console.log(e.target.ouput.value)
  }

  render () {
    return <PropouseLayout submit={this.onSubmit} />
  }
}