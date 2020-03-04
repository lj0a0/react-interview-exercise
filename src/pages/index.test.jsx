import React from "react";
import SignIn from "./index";
import renderer from "react-test-renderer";

test("SignIn snapshot", () => {
  const component = renderer.create(<SignIn />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
