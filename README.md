# peach-tree

## Technologies used

* **React.js**: Used to write the application logic, React is the main technology I have been focusing on during the last two years and even though it is not a framework like angular, it is possible to build a framework around it that allows to build scalable SPA's. 

* **Typescript**: React by default uses javascript, it does not offer strict typing for components/functions/data structures, it is quiet straightforward to set up a react app to use typescript and get the benefits of typing our code.

* **Webpack**: Webpack is used for building the production files mainly the `bundle.js` which is inserted in the main index.html page. Also using the webpack dev server in development mode with HMR.

* **Babel**: Transpiler, all `tsx` and `ts` code goes through its loader.

* **eslint**: Eslint is used as main linter for this project set up with typescript support.

* **prettier**: Used to format code.

* **styled-components**: A javascript library that allows to write css as React components, it does not offer ready to use compnents, all UI elements used in this project have css built from scratch.

* **cypress**: Used to add integration/e2e tests for the application.

## Build

```bash
npm i # installs project dependecies in node_modules/
npm start # starts the app in develop mode and serves it through http://localhost:4000
npm run build # production build and command used to pusblish the app to Netlify
npm run test # prompts a new browser window (chrome by default) and offers dashboard to trigger automated integration tests.
```

## Deployment
* The app is deployed to Netlify which is configured by default to rebuild the app when new commits are pushed to `main` branch. `peach-tree` SPA is hosted [here](https://eloquent-villani-6b11c0.netlify.app/)

## Application structure

### src/app

  * `root`: Since React components communication is unidirectional, this component is the main parent of all the UI componentts as well as context provider to all its children. (same pattern as elm/redux but with native react hooks `useContext` and `useReducer`)
  * `components`: Contains the 3 UI comopnents of our app, the money transfer funcionality `make-transfer-form`, the transactions list `recent-transactions-list` and `transfer-preview-popup`, if a component is complex enough it might have children of its own in a recursive manner (hence the term React tree)

### src/packages:

  * `breakpoints`: One place to store all the media queries used
  * `theme`: One place to store all the colors used with descriptive names
  * `ui-components`: Reusable and configurable UI elements such as input, button..
  * `hooks`: Reusable React hooks (for this project just the one `use-local-storage`).
  * `i18n`: Tanslations and i18n boilerplate.

### src/assets:

  * Images needed for the app, copied by webpack copy plugin to `build` foder during build process.
