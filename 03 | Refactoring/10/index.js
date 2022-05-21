import Bird, {
  EuropeanSwallow,
  AfricanSwallow,
  NorwegianBlueParrot,
} from './Bird.js';

function plumages(birds) {
  return new Map(
    birds.map((b) => createBird(b)).map((bird) => [bird.name, bird.plumage])
  );
}
function speeds(birds) {
  return new Map(
    birds
      .map((b) => createBird(b))
      .map((bird) => [bird.name, bird.airSpeedVelocity])
  );
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

console.log(
  plumages([
    { name: '유제비', type: '유럽 제비' },
    { name: '아제비', type: '아프리카 제비', numberOfCoconuts: 3 },
    { name: '노앵무', type: '노르웨이 파랑 앵무', voltage: 2 },
  ])
);
console.log(
  speeds([
    { name: '유제비', type: '유럽 제비' },
    { name: '아제비', type: '아프리카 제비', numberOfCoconuts: 3 },
    { name: '노앵무', type: '노르웨이 파랑 앵무', voltage: 2, isNailed: false },
  ])
);
