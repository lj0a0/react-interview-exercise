import React, { useState, useEffect } from "react";
import AlertMessage from "../components/atoms/alertMessage/alertMessage";
import "regenerator-runtime/runtime";
import axios from "axios";
import { useHistory } from "react-router-dom";
import * as Constants from "../util/constants";
import LoginForm from "../components/organisms/loginForm/loginForm";
import Spinner from "../components/atoms/spinner/spinner";
import * as API from "../util/api";
import StringHandlers from "../util/stringHandlers";

function SignIn() {
  const [email, setEmail] = useState(
    localStorage.getItem(Constants.LOCAL_STORAGE_LOGGED_EMAIL) || ""
  );
  const [password, setPassword] = useState("");
  const [remeber, setRemember] = useState(false);
  const [errorCode, setCode] = useState({ code: 0 });
  const [data, setData] = useState({ hits: [] });
  const [loading, setLoading] = useState(false);
  const [gitCode, setGitCode] = useState("");
  const [firstLoad, setFirstLoad] = useState(true);

  const history = useHistory();

  useEffect(() => {
    let cancelled = false;
    if (!cancelled) {
      var loggedData = localStorage.getItem(Constants.LOCAL_STORAGE_LOGGED);
    }
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    setLoading(true);
    var currentURL = window.location.href;
    if (currentURL.includes("code=")) {
      var code = StringHandlers.extractCode(currentURL);
      setGitCode(code);
      async function fetchData() {
        var tokenResult = await API.githubAccessToken(code, { signal: signal });
        if (tokenResult == null) {
          setCode({
            code: 2,
            message: Constants.ERROR_COMUNICATION_EXTERNAL_API
          });
        } else {
          var userResult = await API.githubLoggedUserData(tokenResult);
          if (userResult == null) {
            setCode({
              code: 2,
              message: Constants.ERROR_COMUNICATION_EXTERNAL_API
            });
          } else {
            localStorage.setItem(
              Constants.LOCAL_STORAGE_GITHUB_LOGGED_USER,
              JSON.stringify(userResult)
            );

            localStorage.setItem(
              Constants.LOCAL_STORAGE_GITHUB_LOGGED_TOKEN,
              JSON.stringify(tokenResult)
            );
            setLoading(false);
            history.push("/home");
          }
        }
        setFirstLoad(false);
      }
      fetchData();
    }

    return () => {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    if (!cancelled) {
      setLoading(true);
      if (
        localStorage.getItem(Constants.LOCAL_STORAGE_LOGGED) ||
        localStorage.getItem(Constants.LOCAL_STORAGE_GITHUB_LOGGED_USER)
      ) {
        setLoading(false);
        history.push("/home");
      } else {
        setFirstLoad(false);
        setLoading(false);
      }
    }
    return () => {
      cancelled = true;
    };
  }, []);

  async function onFormSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setCode({ code: 0 });

    // if (StringHandlers.validateFields(email, password) && StringHandlers.validateUser(email, password)) {
    if (StringHandlers.validateFields(email, password)) {
      var millisecondsToWait = 2000;
      setTimeout(function() {
        if (remeber) {
          localStorage.setItem(
            Constants.LOCAL_STORAGE_LOGGED,
            JSON.stringify(email)
          );
        }
        setLoading(false);
        history.push("/home");
      }, millisecondsToWait);

    } else {
      setCode({ code: 4, message: Constants.ERROR_LOGIN_PARAMETERS_INVALID });
      setLoading(false);
    }
  }

  async function onGithubLogin(event) {
    event.preventDefault();
    setCode({ code: 0 });
    setLoading(true);
    var result = await githubOAuth();
    setLoading(false);
  }

  async function githubOAuth(email) {
    history.push("/github-oauth");
  }

  return (
    <div>
      <div id="container">
        <div style={firstLoad ? { display: "none" } : null}>
          <LoginForm
            errorCode={errorCode}
            onFormSubmit={onFormSubmit}
            onGithubLogin={onGithubLogin}
            setEmail={setEmail}
            setPassword={setPassword}
            setRemember={setRemember}
          />
        </div>
        <div>
          <Spinner loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
