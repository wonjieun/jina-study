'use strict';
// JavaScript는 동기적이다.
// = 호이스팅 이후에 코드 블록을 작성한 순서대로 실행한다.
// 호이스팅? var, function 선언을 자동적으로 가장 위로 올려보내는 것
/* setTimeout(function () {
  console.log('456')
}, 1000)
console.log('123') */

// 동기적 콜백
/* function printImmediately(print) {
  print()
}
printImmediately(() => console.log('hello')) */

// 비동기적 콜백
/* function printWithDelay(print, timeout) {
  setTimeout(print, timeout)
}
printWithDelay(() => console.log('async callback'), 2000) */

// JavaScript에서는 함수를 변수에 할당, 다른 함수의 인자로 넘겨줄 수 있다.
// JavaScript에서 콜백 구현 방법은 다른 함수의 인자로 넘겨주는 것이다.

// 콜백 헬
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (id === 'jina' && password === '123123') {
        onSuccess(id);
      } else {
        onError(new Error('not found'))
      }
    }, 2000)
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'jina') {
        onSuccess({ name: 'jieun', role: 'admin' })
      } else {
        onError(new Error('no access'))
      }
    }, 1000)
  }
}

const user = new UserStorage();
const userInfo = {
  id: 'jina',
  password: '123123'
}

// 단점: 가독성 떨어져 비즈니스 로직을 파악하기 힘들다
// 디버깅하기 어렵다. 에러가 어떤 콜백 로직에서 발생하는 에러인지 파악하기 어렵다
user.loginUser(userInfo.id, userInfo.password, (result) => {
  user.getRoles(result, (result) => {
    console.log(`${result.name} ${result.role}`)
  }, (error) => {
    console.log(error)
  })
}, (error) => {
  console.log(error)
})
