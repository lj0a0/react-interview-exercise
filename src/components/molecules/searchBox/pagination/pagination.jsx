import React, { useState, useEffect } from "react";

export default function Pagination(props) {
  const [page, setPage] = useState(current);

  const { current, first, next, prev, last } = props.pagesSearch;
  console.log("Pagination Component");

  useEffect(() => {
    if (page) {
      handleSelectPage();
    }
  }, [page]);

  function handleSelectPage() {
    props.handlePaginationChange(page);
  }

  function handleCurrentPageClick() {
    console.log("Current Click: " + current);
    setPage(current);
  }

  function handleCurrentPlusTwoPageClick() {
    console.log("Current Plus Teo Click: " + parseInt(current) + 2);
    setPage(parseInt(current) + 2);
  }

  function handleFirstPageClick() {
    console.log("First Click: " + first);
    setPage(first);
  }

  function handleNextPageClick() {
    console.log("Next Click: " + next);
    setPage(next);
  }

  function handlePrevPageClick() {
    console.log("Prev Click: " + prev);
    setPage(prev);
  }

  function handleLastPageClick() {
    console.log("Last Click: " + last);
    setPage(last);
  }

  if (current && !first && next && last && !prev) {
    return (
      <div className="col-md-6">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              style={{ fontWeight: "bold" }}
              onClick={handleCurrentPageClick}
            >
              {current}
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={handleNextPageClick}>
              {next}
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              onClick={handleCurrentPlusTwoPageClick}
            >
              3
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={handleNextPageClick}>
              Next
            </button>
          </li>

          <li className="page-item" style={{ marginLeft: 10 }}>
            <button className="page-link" onClick={handleLastPageClick}>
              Last
            </button>
          </li>
        </ul>
      </div>
    );
  } else if (current && first && next && last && prev) {
    console.log("current: " + current);
    console.log("first: " + first);
    console.log("next: " + next);
    console.log("last: " + last);
    console.log("prev: " + prev);

    return (
      <div className="col-md-6">
        <ul className="pagination">
          <li className="page-item" style={{ marginRight: 10 }}>
            <button className="page-link" onClick={handleFirstPageClick}>
              First
            </button>
          </li>
          <li className="page-item">
            <button className="page-link">Prev</button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={handlePrevPageClick}>
              {prev}
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              style={{ fontWeight: "bold" }}
              onClick={handleCurrentPageClick}
            >
              {current}
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={handleNextPageClick}>
              {next}
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={handleNextPageClick}>
              Next
            </button>
          </li>
          <li className="page-item" style={{ marginLeft: 10 }}>
            <button className="page-link" onClick={handleLastPageClick}>
              Last
            </button>
          </li>
        </ul>
      </div>
    );
  } else if (current && first && !next && !last && prev) {
    return (
      <div className="col-md-6">
        <ul className="pagination">
          <li className="page-item" style={{ marginRight: 10 }}>
            <button className="page-link" onClick={handleFirstPageClick}>
              First
            </button>
          </li>

          <li className="page-item">
            <button className="page-link" onClick={handlePrevPageClick}>
              Prev
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={handlePrevPageClick}>
              {prev}
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link"
              style={{ fontWeight: "bold" }}
              onClick={handleCurrentPageClick}
            >
              {current}
            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
