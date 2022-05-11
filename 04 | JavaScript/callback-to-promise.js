'use strict';

class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === 'jina' && password === '123123') {
          resolve(id);
        } else {
          reject(new Error('not found'))
        }
      }, 2000)
    })
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'jina') {
          resolve({ name: 'jieun', role: 'admin' })
        } else {
          reject(new Error('no access'))
        }
      }, 1000)
    })
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
