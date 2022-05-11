'use strict';

// async는 Promise를 깔끔하게 쓰기 위한 문법이다.
// Promise를 사용할 경우 async 사용할 경우가 있다. 항상 async로 사용하는 것은 아니다.
function fetchUser() {
  return new Promise((resolve, reject) => {
    resolve('jina') // - fulfilled
    // reject('jina') - rejected
    // return 'jina' - pending
  })
}

async function fetchUserAsync() {
  return 'jina'
}

const user = fetchUserAsync();
// console.log(user)

// ========================================================================

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function getApple() {
  await delay(1000)
  // throw 'error';
  return '사과'
}

async function getBanana() {
  await delay(500)
  return 'banana'
}

function getBananaPromiseChain() {
  return delay(1000)
    .then(() => 'banana')
}

/* function pickFruitsPromiseChain() {
  return getApple()
    .then(apple => {
      return getBanana()
        .then(banana => `${apple} ${banana}`)
    })
}
pickFruitsPromise().then(console.log) */

/* async function pickFruitsAsync() {
  try {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} ${banana}`
  }
  catch (error) {
    console.log(error)
  }
}
pickFruitsAsync().then(console.log) */

// 관련 없는 Promise를 기다리지 않고 수행하기
/* async function pickFruites() {
  const applePromise = getApple()
  const bananaPromise = getBanana()
  const apple = await applePromise
  const banana = await bananaPromise

  return `${apple} ${banana}`
}
pickFruites().then(console.log) */

// Promise APIs
/* function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
    .then(result => result.join(' + '))
}
pickAllFruits().then(console.log) */

/* function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()])
}
pickOnlyOne().then(console.log) */

// ========================================================================

class UserStorage {
  async loginUser(id, password) {
    if (id === 'jina' && password === '123123') {
      return id;
    } else {
      return new Error('not found');
    }
  }

  async getRoles(user) {
    if (user === 'jina') {
      return { name: 'jieun', role: 'admin' }
    } else {
      return new Error('no access')
    }

  }
}

const userInfo = {
  id: 'jina',
  password: '123123'
}
const userPromise = new UserStorage();

userPromise.loginUser(userInfo.id, userInfo.password)
  .then(userPromise.getRoles)
  .then(result => console.log(`${result.name} ${result.role}`))
  .catch(console.log)

