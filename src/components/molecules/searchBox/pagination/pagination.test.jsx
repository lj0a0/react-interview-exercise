import React from "react";
import Pagination from "./pagination";
import renderer from "react-test-renderer";


test("Pagination snapshot first page", () => {
  const component = renderer.create(
    <Pagination
      pagesSearch={{
        current: "1",
        first: "",
        next: "2",
        prev: "",
        last: "34"
      }}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Pagination snapshot last page", () => {
  const component = renderer.create(
    <Pagination
      pagesSearch={{
        current: "34",
        first: "1",
        next: "",
        prev: "33",
        last: ""
      }}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Pagination snapshot Middle", () => {
  const component = renderer.create(
    <Pagination
      pagesSearch={{
        current: "5",
        first: "1",
        next: "6",
        prev: "4",
        last: "34"
      }}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Pagination snapshot Null", () => {
  const component = renderer.create(
    <Pagination
      pagesSearch={{
        current: "",
        first: "",
        next: "",
        prev: "",
        last: ""
      }}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

