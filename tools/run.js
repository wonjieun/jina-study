
import module from './build.js';

function format(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

async function run(fn, options) {
  const task = typeof fn.default === 'undefined' ? fn : fn.default;
  const start = new Date();
  console.log(`[${format(start)}] Starting '${task.name}'...`);

  await fn(options);

  const end = new Date();
  const time = end.getTime() - start.getTime();
  console.log(`[${format(end)}] Finished '${task.name}' after ${time} ms`);
}

// ! Deprecated: process.mainModule [https://nodejs.org/api/process.html#process_process_mainmodule]
if (require.main === module && process.argv.length > 2) {
  delete require.cache[require.main.filename];
  run(module.default).catch(err => console.error(err.stack));
}

export default run;
