import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../../pages/home'
import Login from '../../pages/login'
import Admin from '../../pages/admin'
import AdminPropouse from '../../pages/propouse'
import AdminRating from '../../pages/rating'
import AdminAdminister from '../../pages/administer'

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
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/propouse" component={AdminPropouse} />
            <Route exact path="/admin/rating" component={AdminRating} />
            <Route exact path="/admin/admin" component={AdminAdminister} />
          </Switch>
        )}
    </div>
  </Router>
)