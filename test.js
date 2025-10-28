import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import fs from 'node:fs/promises';
import {register} from 'node:module';
import path from 'node:path';
import process from 'node:process';
import {pathToFileURL} from 'node:url';

async function run(cmd, args) {
  return new Promise((resolve, reject) => {
    const result = {
      code: 0,
      stderr: '',
      stdout: '',
    };
    const child = spawn(cmd, args);

    child.stderr.on('data', data => {
      result.stderr += String(data);
    });

    child.stdout.on('data', data => {
      result.stdout += String(data);
    });

    child.on('error', err => {
      reject(err);
    });

    child.on('close', code => {
      result.code = code;
      resolve(result);
    });
  });
}

async function main() {
  const dir = path.join(process.cwd(), 'examples/fail');

  const files = await fs.readdir(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    register('@node-loader/babel', pathToFileURL(filePath));

    const result = await run('npx', ['eslint', filePath]);
    assert.equal(result.code, 1, `expected exit code 1, got ${result.code}`);
    assert.equal(result.stderr, '', `expected no stderr, got ${result.code}`);
    const {default: messages} = await import(filePath);
    for (const message of messages) {
      assert.match(result.stdout, message);
    }
  }
}

main().catch(err => {
  process.stderr.write(err.message + '\n');
  process.exit(1);
});
