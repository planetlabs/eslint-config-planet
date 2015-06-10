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
