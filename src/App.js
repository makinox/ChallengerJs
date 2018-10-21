import React from 'react'
import Core from './dist/utils/core/routes'
import Navbar from './dist/components/navbar/navbar'

export default class App extends React.Component {
  render() {
    return (
      <Core>
        <Navbar log={this.props.log}/>
      </Core>
    )
  }
}