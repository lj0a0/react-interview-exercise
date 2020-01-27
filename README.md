# React Course Exercise

## Pre-requisites

- node v12.13.1+;
- yarn v1.19.1+;

## Node Version

[nvm](https://github.com/nvm-sh/nvm) is recommended to manage nodejs version. A .nvmrc file exists in root repository with current nodejs version used.

If you use unix, you can configure your operating system to update the nodejs version automatically for currentl folder with version configured at .nvmrc.

Check a possible solution [here](https://github.com/nvm-sh/nvm#automatically-call-nvm-use)

## IDE

We recommend you to install [VSCode](https://code.visualstudio.com/) and [React Food Truck extension](https://marketplace.visualstudio.com/items?itemName=burkeholland.react-food-truck).

You can open this project by double clicking react-course.code-workspace. With that and, assuming you have installed React Food Truck extension, you will have your environment formatting the code when you save any file.

## Commands

Install dependencies:

```
yarn install
```

Start web application server:

```
yarn start
```

Web application will be available at http//localhost:3000

Document and develop presentation components:

```
yarn serve-ui-docs
```

For each presentation component at components folder you will need to configure a README.md file. Check react-styleguidist documentation [here](https://react-styleguidist.js.org/docs/documenting.html)

Unit testing with Jest:

```
 yarn test
```

## Folders structure

- src/components (presentational and reusable components)
- src/pages (container components for each page)
- src/index.js (entry point)
- templates (html and css templates for exercise)

Use your own structure. You are allowed to change for what you think is best

## Exercise

1. Analyze templates folder: Sign in page (signin.html) and GitHub Repos List page (home.html), modal template (modal.html), confirm-modal.html which could be used to confirm and view-modal.html which could be used to show item details;
2. Analyze bootstrap design system [here](https://getbootstrap.com/docs/4.4/components/), and use css classes to style your components. Application already has bootstrap css loaded;
3. Create a Sign In page. No need for form validation (but it is a plus), nor backend communication. To simulate the sign in you can use local storage for now. Show a loading when user submits sign in form (use timeout of 2000 ms) and store session at local storage (only for exercise purpose);
4. Create a page to search for Github Repos page. Use GitHub Api for Repository search (see below);
5. Using the session stored at local storage, make sure when you enter application it checks a user is logged in and if so go to Repositories Page, if not go to Sign In page;
6. After login user should be redirected to Repositories Page;

**We recommend you to use React Styleguidist to document your smaller components (components folder). Project is already setted up for that (see above).**

## Used Bootstrap components

- [Forms](https://getbootstrap.com/docs/4.4/components/forms/);
- [Navbar](https://getbootstrap.com/docs/4.4/components/navbar/);
- [Card](https://getbootstrap.com/docs/4.4/components/card/);
- [Alert](https://getbootstrap.com/docs/4.4/components/alerts/);
- [Modal](https://getbootstrap.com/docs/4.4/components/modal/);
- [Pagination](https://getbootstrap.com/docs/4.4/components/pagination/);
- [Button](https://getbootstrap.com/docs/4.4/components/buttons/);
- [Spinners](https://getbootstrap.com/docs/4.4/components/spinners/);
- [Grid Layout](https://getbootstrap.com/docs/4.0/layout/grid/);
- [Flex Layout](https://getbootstrap.com/docs/4.0/utilities/flex/);

## GitHub Api

- Search Repositories API documentation [here](https://developer.github.com/v3/search/#search-repositories);
- Example of Repositories Search Endpoint: https://api.github.com/search/repositories?q=tetris&page=1&per_page=2;
- Pagination API documentation [here](https://developer.github.com/v3/guides/traversing-with-pagination);

## Note

You are allowed to use external tools, however we do recommend you to not use them in excess because this way it will be harder evaluate your knowledges.
