import foo from './local-module';
import fs from 'fs';
import path from 'path';

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
    })
  );

const testPrintWidth = '1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515';

exports.modifyProps = props => {
  props.foo = foo;
  props.bar = testPrintWidth;
};

if (require.main === module) {
  const paths = ['main.js', '.eslintrc'].map(name => path.join(__dirname, name));

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
