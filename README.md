# Boilerplate React App

Boilerplate project with [foundation](http://foundation.zurb.com/) integration, [scss](http://sass-lang.com/) and [react-router](https://github.com/ReactTraining/react-router) integration.
* [ESLint](http://eslint.org/) & [Airbnb javascript styleguide](https://github.com/airbnb/javascript)
* [Enzyme](http://airbnb.io/enzyme/) & [Jest](https://facebook.github.io/jest/) test utilities
* [Yarn](https://yarnpkg.com/) package manager

## Getting started

### Installation

`yarn` is the recommended package manager to manage this projects dependencies.

Run once:

```bash
yarn install
```

### `yarn start`

Runs the app in development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view in the browser.

## Folder Structure

```
react-boilerplate/
    app/
        __tests__
        components/
        styles/
        app.jsx
    config/
        webpack.config.js
        webpack.dev.config.js
        webpack.prod.config.js
    public/
        index.html
    .babelrc
    .eslintrc.js
    .gitignore
    package.json
    README.md
    yarn.lock
```

For the project to build the `app/app.jsx` and the dependencies of [jquery](https://jquery.com/) and [foundation](http://foundation.zurb.com/) are necessary.

### App code

The `app/` folder contains all application code including styles and tests.

#### Routing & Components

* Routes are currently defined within in the `app/app.jsx`. Moving them out may be useful in large projects.
* Create new components into `app/components/`
* Each component shall have a test file in the `app/components/**/__tests__/` folder with the schema `MyComponent-test.jsx`.

#### Styles

The foundation styles are loaded using webpacks sass-loader. To override basic foundation layout settings modify `app/styles/base/_foundation-settings.scss`.

* Global variables go into `styles/base/_variables.scss`
* Each component shall have it's styles into `styles/components/my-component.scss`.

The stylesheet import is in application entrypoint `app/app.jsx`.

### Configuration
The webpack config files are located in the `config/` folder. A common set of configs are in the `config/webpack.config.js`.
[webpack-merge](https://www.npmjs.com/package/webpack-merge) is used in the `config/webpack.*.config.js` to add environment specific optimizations.

### Other Scripts

#### `yarn run build`
Creates a development build - a `bundle.js` file will be created in the `public/` folder. Production builds come without source maps and are minified.
For more information see `config/webpack.prod.config.js`.

#### `yarn test`
Runs the complete test suite using [jest-cli](https://facebook.github.io/jest/). All tests located in `__tests__` folders are automatically included in the suite.<br />
For convieniance a watcher may be useful during developement, for this run `yarn test -- --watch`.

#### `yarn run test-debug`
Useful command for debugging tests in a IDE. By default yarn may run in parallel processes, which makes it hard to debug.
This command makes use of the jests `--runInBand` option to have tests running serially.<br />
The `$NODE_DEBUG_OPTION` parameter is used by _Webstorm_ to put there the debug configuration.<br />
Configure this command as _Run/Debug Configuration_ in any IntelliJ IDE.

#### `yarn run test-coverage`
Just a normal test execution which also displays and saves a coverage report in many formats to the `coverage/` folder in the project root.<br />
This may be interesting for CI health reports.
