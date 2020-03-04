import axios from "axios";
import * as Constants from "./constants";

export async function githubLoggedUserData(token) {
  try {
    const result = await axios({
      url: Constants.URL_GITHUB_API + "user",
      method: "get",
      timeout: 5000,
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (result.status == 200) {
      return result.data;
    }
    return "";
  } catch (error) {
    return null;
  }
}

export async function githubAccessToken(code) {
  try {
    const result = await axios({
      url: Constants.URL_HEROKU + `authenticate/${code}`,
      method: "get",
      timeout: 5000
    });
    if (result.status == 200) {
      if (result.data.hasOwnProperty("token")) {
        return result.data.token;
      }
    }
    return "";
  } catch (error) {
    console.log(error);
    if (!abortController.signal.aborted) {
      dispatch(requestFailed({ error: e.message }));
    }
    return null;
  }
}

export async function githubSearchRepo(githubSearch) {
  try {
    const result = await axios({
      url:
        Constants.URL_GITHUB_API +
        `search/repositories?q=${githubSearch}&sort=star&order=desc`,
      method: "get",
      timeout: 5000
    });

    if (result.status == 200) {
      if (result.data.hasOwnProperty("total_count")) {
        return result;
      }
      return null;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

//PAGINATION

export async function movedByPagination(pageURL, pageNumber) {
  try {
    const result = await axios({
      url: `${pageURL} + ${pageNumber}`,
      method: "get",
      timeout: 5000
    });
    if (result.status == 200) {
      if (result.data.hasOwnProperty("total_count")) {
        return result;
      }
      return null;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}
