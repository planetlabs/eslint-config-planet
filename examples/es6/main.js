const fs = require('fs');
const path = require('path');

function main(paths) {
  return Promise.all(
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
}

if (require.main === module) {
  const paths = ['main.js', '.eslintrc'].map(name =>
    path.join(__dirname, name)
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
