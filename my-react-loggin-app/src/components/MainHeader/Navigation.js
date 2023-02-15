import React from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../context/auth-context";

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(kontext) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {kontext.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {kontext.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {kontext.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
