import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";

const  ProtectedRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem("auth_token");
    const validToken = token === process.env.REACT_APP_LANDING_TOKEN;
    console.log("VALID TOKEN", validToken)
    return (
        <Route
            {...rest}
            render={props =>
                token ? (
                    <Component {...props} />
                ) : (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: props.location }
                    }}
                />
            )}
        />
    )
}
export default ProtectedRoute;
