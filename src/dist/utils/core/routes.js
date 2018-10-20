import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../../pages/home'
import Login from '../../pages/login'

// import User from '../../user/user'
// import You from '../../you/you'

export default (props) => (
  <Router>
    <div>
      {props.children}
      {props.log ? (
        <Switch>
          {/* <Route exact path="/" component={User} />
          <Route exact path="/you" component={You} /> */}
        </Switch>
      ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        )}
    </div>
  </Router>
)