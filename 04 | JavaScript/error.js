function sum(x, y) {
  if (typeof x != 'number' || typeof y != 'number') {
    throw '숫자가 아닙니다';
  }
  return x + y;
}
// console.log(sum('a', 2));

// NOTE Error exception1
/* function f2() {
  console.log('f2 start');
  throw '에러';
  console.log('f2 end');
}

function f1() {
  console.log('f1 start');
  // 🔖
  try {
    f2();
  } catch (e) {
    console.log(e);
  }
  console.log('f1 end');
}

console.log('will: f1');
f1();
console.log('did: f1'); */

// 🤖 결과
// > will: f1
// > f1 start
// > f2 start
// > 에러
// > f1 end
// > did: f1

// NOTE Error exception2
function f2() {
  console.log('f2 start');
  // 🔖
  // throw '에러';
  throw new Error('에러'); // Error 객체에는 해당 콜스텍 정보가 담겨있다
  console.log('f2 end');
}

function f1() {
  console.log('f1 start');
  f2();
  console.log('f1 end');
}

console.log('will: f1');
// 🔖
try {
  f1();
} catch (e) {
  console.log(e);
}
console.log('did: f1');

// 🤖 결과
// > will: f1
// > f1 start
// > f2 start
// > 에러
// > did: f1

// NOTE throw new Error('에러');
// 🤖 결과
// > will: f1
// > f1 start
// > f2 start
// > Error: 에러
//       at f2
//       at f1
//       at error.js
// > did: f1
