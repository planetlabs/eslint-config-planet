/**
 * This file is only needed for test.js where we import JSX (with .js extension).
 * Consumers of the shared ESLint config do not need to install and configure Babel
 * to use the config.
 */

export default {
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
};
