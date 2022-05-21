import Bird from './Bird.js';

function plumages(bird) {
  return new Bird(bird).plumage;
}
function speeds(bird) {
  return new Bird(bird).airSpeedVelocity;
}

console.log(plumages({ type: '유럽 제비' }));
console.log(speeds({ type: '유럽 제비' }));
