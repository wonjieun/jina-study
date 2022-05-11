function outer() {
  const pizza = '🍕';
  let count = 0;

  function inner() {
    count++;
    return `${count} ${pizza}`;
  }

  return inner;
}

const fun = outer();
console.log('function: ' + fun());
console.log('function: ' + fun());

// OOP
class Outer {
  constructor(pizza = '🍕', count = 0) {
    this.pizza = pizza;
    this.count = count;
  }

  inner() {
    this.count++;
    return `${this.count} ${this.pizza}`;
  }
}

const instacne = new Outer();
console.log('class: ' + instacne.inner());
