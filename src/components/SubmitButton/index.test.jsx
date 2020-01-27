import React from "react";
import SubmitButton from "./index";
import renderer from "react-test-renderer";

test("SubmitButton snapshot", () => {
  const component = renderer.create(<SubmitButton>Submit Button</SubmitButton>);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
