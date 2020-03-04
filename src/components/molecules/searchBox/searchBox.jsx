import React from "react";
import AlertMessage from "../../atoms/alertMessage/alertMessage";

export default function SearchBox(props) {
  const { errorCode, githubSearch, githubSearchOption } = props;

  function handleSearchInput(event) {
    props.handleSearchInput(event);
  }

  function handleSearch(event) {
    props.handleSearch(event);
  }

  function handleSearchClean() {
    props.handleSearchClean();
  }

  return (
    <section className="jumbotron text-center">
      <div className="container">
        {errorCode != 0 ? <AlertMessage error={errorCode} /> : null}

        <h1>Search GitHub Repos</h1>
        <p className="lead text-muted">
          Search for GitHub repos using the following form
        </p>
        <form id="search-form" className="form-inline justify-content-center">
          <label htmlFor="inputSearch" className="sr-only">
            Search by
          </label>
          <input
            type="text"
            id="inputSearch"
            className="form-control"
            placeholder="Search Repo"
            style={{ margin: 10 }}
            required
            autoFocus
            value={githubSearch}
            onChange={handleSearchInput}
          />
          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSearch}
            style={{ margin: 10 }}
          >
            Search
          </button>
          <button
            className="btn btn-secondary"
            type="reset"
            onClick={handleSearchClean}
          >
            Clear
          </button>
        </form>
      </div>
    </section>
  );
}
