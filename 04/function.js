'use strict';

// 함수 선언
function Person() {
  this.name = 'jina';
  this.age = 11;
}

// Uncaught TypeError: Cannot set properties of undefined (setting 'name')
// 함수 호출
const person = Person();
console.log(`🚀 ~ file: function.js ~ line 6 ~ person`, person);
// 생성자를 이용한 객체 생성
const personNew = new Person();
console.log(`🚀 ~ file: function.js ~ line 7 ~ personNew`, personNew);

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const jina = new PersonClass('jina', 11);
console.log(`🚀 ~ file: function.js ~ line 19 ~ jina`, jina);

// Uncaught TypeError: Class constructor PersonClass cannot be invoked without 'new'
// const jina1 = PersonClass();
