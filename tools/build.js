/** build script */
import run from './run';

async function clean() {
  // initialize build directory
}

async function copy() {
  // static files copy to build directory
}

async function bundle() {
  // webpack: source code bundling
}

async function build() {
  await run(clean);
  await run(copy);
  await run(bundle);
}

export default build;
