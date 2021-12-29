/** 작업(JavaScript function) 정보와 걸리는 시간 계산하여 출력 */
function format(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

// 비동기 fn callback(작업) 실행, fn이 완료하는 데 걸리는 시간 출력
async function run(fn, options) {
  const start = new Date();
  console.log(`[${format(start)}] Starting '${fn.name}'...`);

  await fn(options);

  const end = new Date();
  const time = end.getTime() - start.getTime();
  console.log(`[${format(end)}] Finished '${fn.name}' after ${time} ms`);
}

if (process.mainModule.children.length === 0 && process.argv.length > 2) {
  delete require.cache[__filename];
  const module = process.argv[2];
  run(require(`./${module}.js`)).catch(err => console.error(err.stack));
}

export default run;
