import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../context/auth-context";

const Navigation = () => {
  const kontext = useContext(AuthContext);

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
            <button onClick={kontext.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
