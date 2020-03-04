import React from "react";
import AlertMessage from "./alertMessage";
import renderer from "react-test-renderer";

test("AlertMessage snapshot 0", () => {
  const component = renderer.create(<AlertMessage error={{ code: 0 }} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("AlertMessage snapshot 1", () => {
  const component = renderer.create(
    <AlertMessage error={{ code: 1, message: "" }} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("AlertMessage snapshot 2", () => {
  const component = renderer.create(
    <AlertMessage error={{ code: 2, message: "" }} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("AlertMessage snapshot 3", () => {
  const component = renderer.create(
    <AlertMessage error={{ code: 3, message: "" }} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("AlertMessage snapshot 4", () => {
  const component = renderer.create(
    <AlertMessage error={{ code: 4, message: "" }} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
