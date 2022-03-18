'use strict';

// callback
/* function delay(sec, callback) {
  setTimeout(() => {
    callback(new Date().toISOString())
  }, sec * 1000)
}

delay(1, result => {
  console.log(1, result)
})
delay(1, result => {
  console.log(2, result)
})
delay(1, result => {
  console.log(3, result)
})

delay(1, result => {
  console.log(1, result);

  delay(1, result => {
    console.log(2, result)

    delay(1, result => {
      console.log(3, result)
    })
  })
}) */

// ========================================================================

// Promise
/* function delayP(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date().toISOString())
    }, sec * 1000)
  })
}

delayP(1).then((result) => { // Promise의 인스턴스가 then을 가진다
  console.log(1, result);
  return delayP(1);
}).then(result => {
  console.log(2, result)
  return delayP(1)
}).then(result => {
  console.log(3, result)
  return 'wow' // 비동기 연산 Promise를 반환하지 않기 때문에 지연없이 마지막 로그가 찍힌다
}).then(result => {
  console.log(result)
}) */

// async
/* function myFunc() { // 일반 함수
  return 'func'
}

async function myAsync() { // 함수를 Promise를 반환하는 함수를 만들어준다
  return 'async'
}

console.log(myFunc());
console.log(myAsync());
console.log(delayP(3))

myAsync().then((result) => {
  console.log(result);
}) */

// await
/* function normalFunc() { // 일반 함수
  return 'wow'
}

async function myAwait() {
  delayP(3).then(time => {
    console.log(time)
  })
  await delayP(1);
  const time = await delayP(1); // = then에서 받는 결과값을 return
  const result = await delayP(3).then(time => { // return 되는 Promise의 resolve 값
    return 'x'
  })
  const normal = await normalFunc();
  console.log(normal)
  return 'async' // = Promise resolve('async')
}

myAwait().then(result => {
  console.log(result)
}) */

// ========================================================================

// catch
function wait(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error!');
    }, sec * 1000)
  })
}

wait(3)
