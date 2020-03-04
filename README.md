# React Web Github - Exercise

React web page using Github API services to display repositories

## 📋 Getting Started

Make sure to have the following libraries installed. If not install them from the following links:
**NODE:**
```
https://nodejs.org/en/
````
**YARN:**
```
https://classic.yarnpkg.com/lang/en/
````


### 📋 Prerequisites

- node v12.13.1+;
- yarn v1.19.1+;

### 📋 Installing Libraries

Commands to run to execute the app.

Install libraries

```
npm install
```

## 📋 Execute the App

Execute web app (using yarn):
```
yarn start
```

Execute web app (using npm):
```
npm start
```


## 📋 Troubleshooting/Issues

**Sign in with Github:** While trying to loading using "Sign in with Github", if the redirect not occurred in the first click, try a second one. Due to the **callback returned from the Github API**, the loading sometimes is not being caught, and not showing any output. Trying a second click almost always solves and Sign in using Github successfully. It's a situation that needs to be handled with more time to analyze the reason why it's happening.

**Use of External Web Service:** in orther to surpass a problem related to CORS policy the app is connected to an **heroku web service** that make a **bridge** between this react web app and the github OAuth services, in order to allow the user to Sign in using Github account

**CSS External Files:** applying an external "".css", was not recognized by the application. Returning an error related to the webpack. An issue that did not have time to analyze more careflly the reasons.
* Module parse failed: Unexpected token (1:0)
You may need an appropriate loader to handle this file type, currently, no loaders are configured to process this file.

## 📋 Running the tests

To execute all tests at once run the following command:

Using yarn:
```
yarn jest 
```

Using npm:
```
npx jest 
```

To execute a specific test file:

Using yarn:
```
yarn jest <FILENAME>
```

Using npm:
```
npx jest <FILENAME>
```


## Authors
Forked from:
**João Antunes** - [joaoantunes87](https://github.com/joaoantunes87/)

By: 
**Lino Leitão** - [LinoJoao](https://github.com/lj0a0)

