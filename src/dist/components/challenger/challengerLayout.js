import React from 'react'
import { Link } from 'react-router-dom'

import './challengerLayout.css'

export default () => (
  <section className="challenger-section">
    <div className="challenger-section-head">
      <h2>Welcome challenger</h2>
    </div>
    <div className="challenger-section-body">
      <div>
        <h3>Fight challenges</h3>
        <Link to="/challenger/fighter">Fight</Link>
      </div>
      <div>
        <h3>See as public</h3>
        <Link to="/challenger/public">Please sit</Link>
      </div>
    </div>
  </section>
)