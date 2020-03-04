import React from "react";
import { useHistory } from "react-router-dom";
import * as Constants from "../../../util/constants";

export default function NavBar(props) {
  const { loggedUser } = props;
  const history = useHistory();

  function handlerLogout() {
    props.setLoading(true);
    localStorage.removeItem(Constants.LOCAL_STORAGE_LOGGED);
    localStorage.removeItem(Constants.LOCAL_STORAGE_GITHUB_LOGGED_USER);
    setTimeout(function() {
      props.setLoading(false);
      history.push("/");
    }, 1000);
  }

  return (
    <nav className="navbar navbar-dark navbar-expand bg-primary justify-content-between">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item text-center">
            <a className="navbar-brand" href="#">
              <img
                src="https://avatars1.githubusercontent.com/u/9919?s=200&v=4"
                width="30"
                height="30"
                style={{ marginRight: "10px" }}
                className="d-inline-block align-top"
                alt=""
              />
              React@Celfocus
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav">
          <li className="nav-item text-center" id="signup-btn">
            <a
              href="#"
              className="nav-link"
              data-toggle="modal"
              data-target="#"
            >
              <img
                src={
                  loggedUser != ""
                    ? loggedUser.avatar_url
                    : window.location.origin + "/images/guestUser.png"
                }
                width="25"
                height="25"
                style={{ marginRight: "10px" }}
                className="d-inline-block align-top"
                alt=""
              />
              {loggedUser != "" ? loggedUser.login : "Guest User"}
            </a>
          </li>
          <li className="nav-item text-center" id="login-btn">
            <a
              href="#"
              className="nav-link"
              data-toggle="modal"
              data-target="#"
              onClick={handlerLogout}
            >
              <span className="d-none d-sm-inline d-xl-block px-1">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
