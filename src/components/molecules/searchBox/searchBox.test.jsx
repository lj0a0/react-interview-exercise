import React from "react";
import SearchBox from "./searchBox";
import renderer from "react-test-renderer";


test("SearchBox snapshot", () => {
  const component = renderer.create(
    <SearchBox
        errorCode={{code: 0}}
        githubSearch={"react"}
        githubSearchOption={"star"}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});