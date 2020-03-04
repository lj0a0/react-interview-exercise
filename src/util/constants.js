// KEYS
export const CLIENT_ID = "2c9bbea63ed44c470fed";

//URL
export const URL_GITHUB_API = "https://api.github.com/";
export const URL_HEROKU = "https://oauthbridge.herokuapp.com/";
export const URL_REDIRECT = "http://localhost:3000/";
export const URL_GITHUB_OAUTH = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${URL_REDIRECT}`;

//STORAGE
export const LOCAL_STORAGE_LOGGED = "logged";
export const LOCAL_STORAGE_LOGGED_EMAIL = "loggedEmail";

//GITHUB
export const LOCAL_STORAGE_GITHUB_LOGGED_USER = "github_logged_user";
export const LOCAL_STORAGE_GITHUB_LOGGED_TOKEN = "github_token";

// ERROR MESSAGES
export const ERROR_PAGINATION_REQUEST = "Error on pagination request";
export const ERROR_SEARCH_PARAMETERS_INCOMPLETE =
  "Search parameters not complete! Select options and word to search!";
export const ERROR_LOGIN_PARAMETERS_INVALID =
  "Invalid email or password! Try with a diferent one!";
export const ERROR_COMUNICATION_EXTERNAL_API =
  "Error in comunications with Github API! Try again!";
