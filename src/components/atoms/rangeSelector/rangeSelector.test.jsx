import React from "react";
import RangeSelector from "./rangeSelector";
import renderer from "react-test-renderer";

it("RangeSelector correctly", () => {
  const tree = renderer
    .create(<RangeSelector pagesSearch={"react"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
