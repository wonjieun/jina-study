/** build script */
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
  await clean();
  await copy();
  await bundle();
}

export default build;
