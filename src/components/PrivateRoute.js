import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { isAuthenticated } from "../modules/auth"
function PrivateRoute ({component: Component, authenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

const mapStateToProps = state => ({
  authenticated: isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);
