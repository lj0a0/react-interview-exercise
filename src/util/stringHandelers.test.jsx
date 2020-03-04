import React from "react";
import StringHandlers from "./stringHandlers";
import renderer from "react-test-renderer";

test("throw error", () => {
  expect(StringHandlers.extractPageURL(1234)).toBe(null);
});

test("return url", () => {
  expect(
    StringHandlers.extractPageURL(
      '<https://api.github.com/search/repositories?q=reat&sort=stars&order=desc&page=2>; rel="next"'
    )
  ).toBe(
    "https://api.github.com/search/repositories?q=reat&sort=stars&order=desc&page="
  );
});

test("throw error", () => {
  expect(StringHandlers.extractPageNumber(1234)).toBe(null);
});

test("return page number", () => {
  expect(
    StringHandlers.extractPageNumber(
      '<https://api.github.com/search/repositories?q=reat&sort=stars&order=desc&page=2>; rel="next"'
    )
  ).toBe("2");
});
