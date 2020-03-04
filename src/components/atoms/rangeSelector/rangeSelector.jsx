import React from "react";

export default function RangeSelector(props) {
  const { pagesSearch, itemsShow, next, prev, last } = props;
  console.log("RangeSelector - Component");

  function handleChange(event) {
    props.setItemsShow(event.target.value);
  }

  if (pagesSearch) {
    return (
      <select
        className="custom-select"
        onChange={handleChange}
        value={itemsShow}
      >
        <option value="6">6</option>
        <option value="12">12</option>
        <option value="18">18</option>
        <option value="24">24</option>
        <option value="30">30</option>
      </select>
    );
  } else {
    return null;
  }
}
