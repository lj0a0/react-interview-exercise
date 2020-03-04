import React from "react";
import NavBar from "./navBar";
import renderer from "react-test-renderer";


test("NavBar snapshot visible", () => {
  const component = renderer.create(
    <NavBar
    loggedUser={{avatar_url: "https://avatars2.githubusercontent.com/u/2100222?v=4", login: "Guest"}}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
