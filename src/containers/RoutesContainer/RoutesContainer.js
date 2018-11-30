import React, { PureComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import loginContainer from 'containers/loginContainer/loginContainer';

class RoutesContainer extends PureComponent {

  componentWillMount() {
  }

  componentWillReceiveProps(newProps) {
  }

  render () {
    return (
      <Switch>
        <Route exact path="/login" component={loginContainer}/>
        <Route path="/" component={loginContainer}/>
        <Redirect to="/404"/>
      </Switch>
    )
  }
}

export default RoutesContainer;