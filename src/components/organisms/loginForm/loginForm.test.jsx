import React from "react";
import LoginForm from "./loginForm";
import renderer from "react-test-renderer";

test("LoginForm snapshot 1", () => {
  const component = renderer.create(
    <LoginForm
    email={""}
    password={""}
    remeber={false}
    errorCode={0}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("LoginForm snapshot 2", () => {
  const component = renderer.create(
    <LoginForm
    email={""}
    password={""}
    remeber={false}
    errorCode={{code: 1}}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});



test("LoginForm snapshot 6", () => {
  const component = renderer.create(
    <LoginForm
    email={""}
    password={""}
    remeber={true}
    errorCode={0}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("LoginForm snapshot 7", () => {
  const component = renderer.create(
    <LoginForm
    email={""}
    password={""}
    remeber={true}
    errorCode={{code: 1}}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
