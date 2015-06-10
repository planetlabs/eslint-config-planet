## eslint-config-planet

This package provides shareable [ESLint](http://eslint.org/) configurations for JavaScript projects that conform with Planet Labs' lint configurations.

### Installation

To make use of this config, install ESLint and this package as a development dependency of your project:

    npm install eslint eslint-config-planet --save-dev

Next, create a `.eslintrc` file at the root of your project.  At a minimum, this config file must include an `extends` member:

```json
{
  "extends": "planet"
}
```

See the ESLint [configuration guide](http://eslint.org/docs/user-guide/configuring) for details on additional configuration options.  Any rules configured in your `.eslintrc` file will override those provided by the `eslint-config-planet` package.

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

In addition to running the linter when your tests are run, you should configure your editor to run the linter as well.  For Sublime Text, install the [SublimeLinter-contrib-eslint](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint) plugin.

The `SublimeLinter` plugin can be configured to show lint errors on save.  Edit your `SublimeLinter` user preferences to include the following:

```json
  {
    "show_errors_on_save": true
  }
```

### Profiles

The `eslint-config-planet` package includes a number of ESLint configuration profiles for different types of projects.

#### `planet` (base config)

The "base" config is suitable for Node projects or browser-based projects using a CommonJS module loader (e.g. [Browserify](http://browserify.org/) or [Webpack](http://webpack.github.io/)).

Example `.eslintrc`:
```json
{
  "extends": "planet"
}
```

#### `planet/react`

The `planet/react` config is suitable for projects using [React](https://facebook.github.io/react/).  This extends the base config to include the React plugin, enable JSX parsing, and run React specific rules.  To use this profile, you'll need to install the `eslint-plugin-react` package:

    npm install eslint-plugin-react --save-dev

Then your minimal `.eslintrc` would look like this:
```json
{
  "extends": "planet/react"
}
```

### License

© Planet Labs, Inc.

Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0) (the "License"); you may not use this file except in compliance with the License.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See [the License](http://www.apache.org/licenses/LICENSE-2.0) for the specific language governing permissions and limitations under the License.
