// NOTE getter, setter
// 객체를 생성할 때 필드를 올바르지 않게 사용하는 것을 방지할 수 있다.
// setter 안에서 필드명과 동일한 이름을 사용하면 Uncaught RangeError: Maximum call stack size exceeded
// _ 언더바를 붙여 무한 호출에 빠지지 않게 한다.
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const jina = new User('jina', 'won', '-1');
console.log(`🚀 ~ file: class.js ~ line 18 ~ jina`, jina);

// NOTE static
// Object에 상관없이 클래스에서 공통적으로 사용하는 부분을 static으로 선언하여
// 메모리 사용을 줄인다.
class Article {
  static publisher = 'jina';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// NOTE extends
// 상속하기
class Parents {
  constructor(healthy, personality, age) {
    this.healthy = healthy;
    this.personality = personality;
    this.age = age;
  }

  print() {
    console.log(`${this.healthy}, ${this.personality}, ${this.age}`);
  }

  getAge() {
    return this.age;
  }

  getCountry() {
    return 'Republic of Korea';
  }
}

class Jieun extends Parents {}
class Dew extends Parents {
  print() {
    super.print();
    console.log('She is also cute 🥰');
  }

  getAge() {
    // 오버라이딩
    return 15 + 9 + (this.age - 2) * 4;
  }

  toString() {
    return `Dew: ${this.getAge()}`;
  }
}

const jieun = new Jieun('good', 'polite', 30);
const dew = new Dew('good', 'smart', 9);
jieun.print();
console.log(`🚀 ~ file: class.js ~ line 72 ~ jieun.getAge()`, jieun.getAge());
dew.print();
console.log(`🚀 ~ file: class.js ~ line 75 ~ dew.getAge()`, dew.getAge());

console.log(dew instanceof Object);
console.log(dew.toString());
