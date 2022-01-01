import path from 'path';
import util from 'util';
import gaze from 'gaze';
import cp from 'child_process';
import build from './build';
import run from './run';

async function serve() {
  const watch = true;
  const app = path.join(__dirname, '../build/server.js');
  const promiseGaze = util.promisify(gaze);
  await run(build, { watch });
  await new Promise((resolve, reject) => {
    function start() {
      const server = cp.spawn(
        'node',
        [path.join(__dirname, '../build/server.js')],
        {
          env: Object.assign({ NODE_ENV: 'development' }, process.env),
          silent: false
        }
      );

      server.stdout.on('data', (data) => {
        process.stdout.write(new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '[$1] '));
        process.stdout.write(data);
        if (data.toString('utf8').includes('Node.js server is listening at')) {
          resolve();
        }
      });
      server.stderr.on('data', data => process.stderr.write(data));
      server.once('error', err => reject(err));
      process.on('exit', () => server.kill('SIGTERM'));
      return server;
    }

    let server = start();

    if (watch) {
      promiseGaze('build/server.js').then((watcher) => {
        watcher.on('changed', () => {
          server.kill('SIGTERM');
          server = start();
        });
      });
    }
  });
}

export default serve;
