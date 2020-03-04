import React, { useState, useEffect } from "react";
import * as Constants from "../util/constants";
import AlertMessage from "../components/atoms/alertMessage/alertMessage";
import Card from "../components/atoms/card/card";
import axios from "axios";
import Pagination from "../components/molecules/searchBox/pagination/pagination";
import RangeSelector from "../components/atoms/rangeSelector/rangeSelector";
import Spinner from "../components/atoms/spinner/spinner";
import NavBar from "../components/organisms/navBar/navBar";
import StringHandlers from "../util/stringHandlers";
import SearchBox from "../components/molecules/searchBox/searchBox";
import * as API from "../util/api";

function Home() {
  const [loading, setLoading] = useState(true);
  const [errorCode, setCode] = useState(0);
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(
      localStorage.getItem(Constants.LOCAL_STORAGE_GITHUB_LOGGED_USER)
    ) || ""
  );
  const [githubSearch, setGithubSearch] = useState("");
  const [itemsShow, setItemsShow] = useState(6);
  const [pagesSearch, setPagesSearch] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  const [renderItems, setRenderItems] = useState([]);

  //region UseEffect
  useEffect(() => {
    if (searchItems.length > 0) {
      var tmpArray = [];
      for (let i = 0; i < itemsShow; i++) {
        tmpArray.push(searchItems[i]);
      }
      setRenderItems(tmpArray);
    }
  }, [searchItems, itemsShow, pagesSearch]);

  useEffect(() => {
    let cancelled = false;
    if (!cancelled) {
      setLoading(true);
      setTimeout(function() {
        var result = loggedUser;
      }, 1000);

      setLoading(false);
    }
    return () => {
      cancelled = true;
    };
  }, []);
  //endregion

  //region Search Handlers

  function handleSearchClean() {
    setGithubSearch("");
  }

  function handleSearchInput(event) {
    setGithubSearch(event.target.value);
  }

  async function handleSearch(event) {
    try {
      event.preventDefault();
      setLoading(true);
      if (githubSearch) {
        var searchResult = await githubSearchRepo();
        if (searchResult) {
          var pagesURLs = searchResult.headers.link;
          extractPages(pagesURLs);
        }
        setLoading(false);
      } else if (!githubSearch) {
        setCode({ code: 3, message: Constants.ERROR_PAGINATION_REQUEST });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      return null;
    }
  }

  //endregion

  async function githubSearchRepo() {
    try {
      var result = await API.githubSearchRepo(githubSearch);
      if (result.data.hasOwnProperty("total_count")) {
        setSearchItems(result.data.items);
        return result;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  //region Pagination Handlers
  function extractPages(jsonLinks) {
    try {
      var pagesURLs = jsonLinks.split('", <');
      var pages = {
        prev: "",
        first: "",
        next: "",
        last: "",
        current: "",
        defautlURL: ""
      };
      pagesURLs.map(url => {
        var pageNumber = StringHandlers.extractPageNumber(url);
        var pageURL = StringHandlers.extractPageURL(url);
        pages.defautlURL = pageURL;
        if (url.search("first") != -1) {
          pages.first = pageNumber;
        } else if (url.search("prev") != -1) {
          pages.prev = pageNumber;
          pages.current = parseInt(pageNumber) + 1;
        } else if (url.search("next") != -1) {
          pages.next = pageNumber;
          pages.current = parseInt(pageNumber) - 1;
        } else if (url.search("last") != -1) {
          pages.last = pageNumber;
        }
      });
      setPagesSearch(pages);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function handleMovedByPagination(pageNumber) {
    try {
      setLoading(true);
      var result = await API.movedByPagination(
        pagesSearch.defautlURL,
        pageNumber
      );

      if (result.data.hasOwnProperty("total_count")) {
        setSearchItems(result.data.items);

        setLoading(false);
        return result;
      }
      setLoading(false);
      return null;
    } catch (error) {
      console.log(error);
      setLoading(false);
      return null;
    }
  }

  async function handlePaginationChange(pageNumber) {
    try {
      setLoading(true);
      var searchResult = await handleMovedByPagination(pageNumber);
      if (searchResult.data.hasOwnProperty("total_count")) {
        var pagesURLs = searchResult.headers.link;
        extractPages(pagesURLs);
      } else {
        setCode({ code: 3, message: Constants.ERROR_PAGINATION_REQUEST });
        setLoading(false);
      }
      return null;
    } catch (error) {
      console.log(error);
      setLoading(false);
      return null;
    }
  }
  //endregion

  return (
    <div>
      <div>
        <header>
          <NavBar loggedUser={loggedUser} setLoading={setLoading} />
        </header>
        <main role="main">
          <SearchBox
            errorCode={errorCode}
            githubSearch={githubSearch}
            handleSearchInput={handleSearchInput}
            handleSearch={handleSearch}
            handleSearchClean={handleSearchClean}
          />

          <div className="album py-5 bg-light">
            <div
              className="container"
              style={!renderItems.length > 0 ? { dislay: "none" } : null}
            >
              <div id="repos-list" className="row">
                {renderItems.map((item, i) => {
                  return <Card key={item.id} data={item} />;
                })}
              </div>

              <div
                className="row"
                style={!renderItems.length > 0 ? { dislay: "none" } : null}
              >
                <div className="col-md-3"></div>
                <div className="col-md-2">
                  <RangeSelector
                    pagesSearch={pagesSearch}
                    itemsShow={itemsShow}
                    setItemsShow={setItemsShow}
                  />
                </div>
                <Pagination
                  pagesSearch={pagesSearch}
                  handlePaginationChange={handlePaginationChange}
                />
                <div className="col-md-3"></div>
              </div>
            </div>
          </div>
        </main>

        <footer className="text-muted">
          <div className="container">
            <p className="float-right">
              <a href="#">Back to top</a>
            </p>
            <p>React Web App using Github API - 2020</p>
          </div>
        </footer>
        <Spinner loading={loading} />
      </div>
    </div>
  );
}

export default Home;
