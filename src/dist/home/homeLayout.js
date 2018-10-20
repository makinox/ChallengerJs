import React from 'react'
import {Link} from 'react-router-dom'
import './homeLayout.css'

export default () => (
  <section className="homeLayout-section">
    <div>
      <h1>Welcome to challengerJs</h1>
      <h4>Are you sure you know how to code?</h4>
      <Link to="/login">Accept the challenge?</Link>
    </div>
  </section>
)