import React from "react";
import Spinner from "./spinner";
import renderer from "react-test-renderer";


test("Spinner snapshot visible", () => {
  const component = renderer.create(
    <Spinner
    loading={true}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Spinner snapshot hidded", () => {
    const component = renderer.create(
      <Spinner
      loading={false}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });