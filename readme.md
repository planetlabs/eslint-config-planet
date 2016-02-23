## eslint-config-planet

This package provides shareable [ESLint](http://eslint.org/) configurations for JavaScript projects that conform with Planet Labs' coding style.

### Installation

To make use of this config, install ESLint (>= 2.0) and this package as a development dependency of your project:

    npm install eslint eslint-config-planet --save-dev

Next, add an `eslintConfig` member to your project's `package.json`.  At a minimum, this config file must include an `extends` member:

```json
{
  "eslintConfig": {
    "extends": "planet"
  }
}
```

See the ESLint [configuration guide](http://eslint.org/docs/user-guide/configuring) for details on additional configuration options.  Any rules configured in your `package.json` file will override those provided by the `eslint-config-planet` package.

### Use

You should run the linter as part of (or before) your tests.  Assuming tests are run before any proposed changes are merged, this will ensure coding standards are maintained in your default branch.  Using [npm scripts](https://docs.npmjs.com/misc/scripts) is the preferred way to run the linter without requiring it to be a global dependency.  Assuming you want to lint all JavaScript files in your project, add the following entry to your `package.json`:

```json
{
  "scripts": {
    "pretest": "eslint src"
  }
}
```

With this `pretest` entry in your `package.json`, ESLint will run on all JavaScript files in the `src` directory of your project using your `.eslintrc` config when tests are run:

    npm test

See the ESLint [CLI guide](http://eslint.org/docs/user-guide/command-line-interface) for additional options when running ESLint.

In addition to running the linter when your tests are run, you should configure your editor to run the linter as well.  See the [ESLint integration page](http://eslint.org/docs/user-guide/integrations#editors) to find details on configuring your editor to warn you of ESLint errors.

See the [examples directory](https://github.com/planetlabs/eslint-config-planet/tree/master/examples) for more usage examples.

### Profiles

The `eslint-config-planet` package includes a number of ESLint configuration profiles for different types of projects.

#### `planet` (base config)

The "base" config is suitable for Node projects or browser-based projects using a CommonJS module loader (e.g. [Browserify](http://browserify.org/) or [Webpack](http://webpack.github.io/)).

Example configuration in `package.json`:
```json
{
  "eslintConfig": {
    "extends": "planet"
  }
}
```

#### `planet/react`

The `planet/react` config is suitable for projects using [React](https://facebook.github.io/react/).  This extends the base config to include the React plugin, enable JSX parsing, and run React specific rules.  To use this profile, you'll need to install the `eslint-plugin-react` package:

    npm install eslint-plugin-react --save-dev

Then your minimal configuration in `package.json` would look like this:
```json
{
  "eslintConfig": {
    "extends": "planet/react"
  }
}
```

### Development

To add another configuration profile, add a new config script to the root of the repository directory (e.g. `new-config.js`).  This script should export an ESLint config object and should have an `extends: './index.js' property`.  People using this config will add `extends/new-config` to their own ESLint config.

You should add and example for your new profile and ensure that tests pass with any changes.

    npm test

After adding a new config profile or modifying an existing one, publish a new version of the package.  Adding a new "error" level rule constitutes a major release.  A new profile or non-breaking modification to an existing profile (e.g. a "warning" level rule) can be a minor release.

Publishing a new minor release would look like this:

    # commit and push any changes first
    npm version minor # this bumps the package.json version number and tags
    git push --tags origin master
    npm publish

[![Current Status](https://secure.travis-ci.org/planetlabs/eslint-config-planet.png?branch=master)](https://travis-ci.org/planetlabs/eslint-config-planet)

### License

© Planet Labs, Inc.

Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0) (the "License"); you may not use this file except in compliance with the License.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See [the License](http://www.apache.org/licenses/LICENSE-2.0) for the specific language governing permissions and limitations under the License.
