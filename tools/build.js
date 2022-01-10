/** build script */
import fs from 'fs';
import util from 'util';
import del from 'del';
import webpack from 'webpack';
import ncp from 'ncp';
import run from './run';
import webpackConfig from './webpack.config';

async function clean() {
  // initialize dist directory
  await del(['dist/*']);
}

async function copy() {
  // static files copy to dist directory
  const promiseNcp = util.promisify(ncp);
  if (!fs.existsSync('dist')) fs.mkdirSync('dist');
  await promiseNcp('public', 'dist/public');
  await promiseNcp('package.json', 'dist/package.json');
}

async function bundle({ watch }) {
  // webpack: source code bundling
  return new Promise((resolve, reject) => {
    let bundlerRunCount = 0;
    const bundler = webpack(webpackConfig);
    const cb = (err, stats) => {
      if (err) {
        reject(err);
        return;
      }

      console.log(stats.toString(webpackConfig[0].stats));

      if (++bundlerRunCount === (watch ? webpackConfig.length : 1)) {
        resolve();
      }
    };

    if (watch) {
      bundler.watch(200, cb);
    } else {
      bundler.run(cb);
    }
  });
}

async function build(options = { watch: false }) {
  await run(clean);
  await run(copy);
  await run(bundle, options);
}

export default build;
