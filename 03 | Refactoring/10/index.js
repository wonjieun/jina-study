import Bird, {
  EuropeanSwallow,
  AfricanSwallow,
  NorwegianBlueParrot,
} from './Bird.js';

function plumages(bird) {
  return createBird(bird).plumage;
}
function speeds(bird) {
  return createBird(bird).airSpeedVelocity;
}

function createBird(bird) {
  switch (bird.type) {
    case '유럽 제비':
      return new EuropeanSwallow(bird);
    case '아프리카 제비':
      return new AfricanSwallow(bird);
    case '노르웨이 파랑 앵무':
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
}

console.log(plumages({ type: '유럽 제비' }));
console.log(speeds({ type: '유럽 제비' }));
