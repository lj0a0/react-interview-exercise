import React from "react";
import AlertMessage from "../../atoms/alertMessage/alertMessage";

export default function LoginForm(props) {
  const { email, password, remeber, errorCode } = props;

  function handleOnEmailChange(event) {
    props.setEmail(event.target.value);
  }

  function handleOnPasswordChange(event) {
    props.setPassword(event.target.value);
  }

  function handleOnRememberChange() {
    props.setRemember(!remeber);
  }

  function onFormSubmit(event) {
    props.onFormSubmit(event);
  }

  function onGithubLogin(event) {
    props.onGithubLogin(event);
  }

  return (
    <div>
      <main className="signin-container text-center">
        <form className="form-signin" onSubmit={onFormSubmit}>
          {errorCode != 0 ? <AlertMessage error={errorCode} /> : null}

          <div className="mb-4">
            <img
              src="https://avatars1.githubusercontent.com/u/9919?s=200&v=4"
              alt="brand-icon"
              width="72"
              height="72"
              border="1px solid red"
            />
          </div>

          <div className="mb-4">
            <h1 className="h3 font-weight-normal">Please sign in</h1>
          </div>

          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            value={email}
            onChange={handleOnEmailChange}
            required
            autoFocus
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={handleOnPasswordChange}
            required
          />

          <div className="mb-3">
            <label>
              {" "}
              <input
                type="checkbox"
                value={remeber}
                checked={remeber}
                onChange={handleOnRememberChange}
              />{" "}
              Remember me{" "}
            </label>
          </div>

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>

          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={onGithubLogin}
          >
            Sign in with Github
          </button>
        </form>
      </main>
    </div>
  );
}
