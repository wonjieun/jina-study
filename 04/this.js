/**
 * this
 * JavaScript에서 모든 function은 this를 가진다.
 * 호출하는 상황에 따라 this가 가리키는 Object가 달라진다.
 * 전역 실행 컨텍스트를 만들고 함수가 실행될 때 함수 실행 컨텍스트를 만든다.
 * 
 * 
 * 1. new 바인딩 - new 키워드로 생성한 객체에 바인딩
 *               - 1. 새로운 객체 생성 2. 함수 코드 실행 3. 새로 생성한 객체 반환
 * 2. 명시적 - bind, call, apply로 명시적으로 바인딩
 *           - call(this, arg1, arg2, ...)
 *           - apply(this, args)
 *           - Function.bind(this, arg1, arg2, ...)
 * 3. 암시적 - 점 연산자(.) 또는 대괄호 연산자를 통한 바인딩
 *          - (.)점 연산을 통해 접근하는 함수는 바로 호출하지 않고서는 암시적 바인딩 할 수 없다
 * 4. 기본 - 함수를 단독 호출할 경우
 *          - 브라우저 환경에서 strict mode: undefined, non-strict mode: Window
 *          - Node 환경에서 global 객체
 * 
 * 유효한 JavaScript 식별자가 아닌 이름(공백이나 붙임표, 숫자로 시작하는 이름)을 가진 속성은 대괄호 표기법으로만 접근할 수 있습니다.
 * 메서드(method)는 객체와 연관된 함수, 다른 말로 하자면 객체 속성 중 함수인 것을 말합니다. 메서드는 다른 함수와 똑같이 정의하지만, 객체 속성에 할당한다는 점이 다릅니다.
 * 함수 호이스팅은 오직 함수 선언과 함께 작동하고, 함수 표현식에서는 동작하지 않습니다.
 * 
 */

// 기본 바인딩
'use strict';
const fdfdf = function () {
  console.log(this);
}
// fdfdf();

// 암시적 바인딩
const obj = {
  name: 'jina',
  getName() {
    return this.name;
  }
}
function showReturnValue(cb) { // 참조 타입이 아닌 cb 프로퍼티 값(참조 값)만 전달
  console.log('showReturnValueObj: ' + obj.getName());
  console.log('showReturnValue: ' + cb());
}
// showReturnValue(obj.getName);

// new 바인딩
const myClassThis = function () {
  this.name = 'dew';
  this.introduce = 'hello';
  this.whoAmI = function () {
    console.log(this.name);
  }
}
const someoneNew = new myClassThis();
someoneNew.whoAmI();

const someone = {
  name: 'jina',
  whoAmI: function () {
    console.log(this)
  }
}

// 기본 바인딩
// 객체 안에 this는 자기자신을 가리킴

// someone이 점 연산자를 통해 호출
someone.whoAmI(); // -> someone

const myWhoAmI = someone.whoAmI;
// Window가 호출
myWhoAmI(); // -> Window

const btn = document.getElementById('btn');
// btn이 호출
btn.addEventListener('click', someone.whoAmI); // -> Button
// = btn.addEventListener('click', myWhoAmI);

// bind() 함수를 이용하여 this를 명시적으로 바인딩
const bindedWhoAmI = myWhoAmI.bind(someone);
bindedWhoAmI(); // -> someone
btn.addEventListener('click', bindedWhoAmI); // -> someone

// ========================================================================

/*
ES6(ES2015)에 추가된 Arrow Function에 없는 것
1. 함수 이름
2. this
  - bind로 주입할 수 없다.
3. arguments
*/

const myFunc = () => {

}

const myObj = {
  count: 0,
  setCounter: function () {
    console.log(this.count);
    btn.addEventListener('click', function () {
      console.log(this); // -> Button
    });
  },
  setCounterThisBind: function () {
    console.log(this.count);
    btn.addEventListener('click', (function () {
      console.log(this); // -> myObj
    }).bind(this));
  },
  setCounterArrow: function () {
    console.log(this.count);
    btn.addEventListener('click', () => {
      console.log(this);
    });
  }
};

// myObj.setCounterThisBind();
myObj.setCounterArrow();
// arrow function은 this를 가지고 있지 않기 때문에
// 선언된 위치의 스코프에서 찾는 스코프 체인에 의해 상위 스코프의 this를 찾는다
// 선언된 위치의 상위 스코프에서 this를 찾는다.

// this가 없기 때문에 new 키워드로 constructor를 호출 할 수 없다.
// 그렇다는 것은 프로토타입도 존재하지 않는다.
const myClass = () => {
}
// new myClass(); // Uncaught TypeError: myClass is not a constructor

// arguments가 없다
const my2 = () => {
  console.log(arguments)
}
// my2(1, 2, 3, 4); // Uncaught ReferenceError: arguments is not defined

// arguments 가져오기
// (1)
function outter() {
  const my2 = () => {
    console.log(arguments);
  };
  my2();
}
outter(1, 2, 3, 4);

// (2)
const myFunc2 = (...args) => {
  console.log(args);
}
myFunc2(1, 2, 3);
