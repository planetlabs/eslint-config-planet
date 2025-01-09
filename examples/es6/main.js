import fs from 'fs';
import path from 'path';
import foo from './local-module.js';

const main = paths =>
  Promise.all(
    paths.map(name => {
      return new Promise((resolve, reject) => {
        fs.readFile(name, (err, data) => {
          if (err) {
            reject(err);
          } else {
            resolve(String(data));
          }
        });
      });
    }),
  );

exports.modifyProps = props => {
  props.foo = foo;
};

if (require.main === module) {
  const paths = ['main.js', '.eslintrc'].map(name =>
    path.join(__dirname, name),
  );
  main(paths)
    .then(contents => {
      contents.forEach((content, index) => {
        process.stdout.write(`${paths[index]}:\n${content}\n`);
      });
    })
    .catch(err => {
      process.stderr.write(`Failed: ${err.message}`);
    });
}
