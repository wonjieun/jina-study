'use strict';

// Promise는 JavaScript에 내장된 객체로 비동기 작업을 할 때 유용하다
// 1. State 
//  - pending -> fulfilled or rejected
// 2. Producer/Consumer

// Producer
// Promise는 클래스로 new 키워드를 통해 만들 수 있다.
// Promise를 만드는 순간 executor 함수가 실행된다.
// 유저가 요구할 때만 실행하고 싶을 경우에는 따로 처리를 해야겠다.

setTimeout(() => {
  console.log('jieun')
}, 0)

// Producer
const promise = new Promise((resolve, reject) => {
  // doing heavy work (network, file I/O)
  console.log('doing')
  // setTimeout(() => {
  resolve('jina')
  // }, 1000)
  setTimeout(() => {
    console.log('setTimeout in Promise')
  }, 1000)
});

// promise chaining
// Consumer: then, catch, finally
promise.then(value => {
  console.log(value)
}).catch(error => {
  console.error(error)
}).finally(() => {
  console.log('finally')
})

const fetchNumber = new Promise((resolve, reject) => {
  resolve(1)
})

// then은 값이나 Promise 전달 가능
fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      resolve(num - 1)
    })
  })
  .then(num => console.log(num))

// error handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000)
  })
const getEgg = (result) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve('알'), 1000)
    setTimeout(() => reject(`${result} + 알`), 1000)
  })

const cook = (result) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${result} + 후라이`), 1000)
  })

// catch를 원하는 라인에 집어넣어 확인
getHen()
  .then(result => getEgg(result))
  .catch(error => { return '빵' })
  .then(result => cook(result))
  .then(result => console.log(result))
  .catch(console.log)
