export default class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get plumage() {
    switch (this.type) {
      case '유럽 제비':
        return '보통이다';
      case '아프리카 제비':
        return this.numberOfCoconuts > 2 ? '지쳤다' : '보통이다';
      case '노르웨이 파랑 앵무':
        return this.voltage > 100 ? '그을렸다' : '예쁘다';
      default:
        return '알 수 없다';
    }
  }

  get airSpeedVelocity() {
    switch (this.type) {
      case '유럽 제비':
        return 35;
      case '아프리카 제비':
        return 40 - 2 * this.numberOfCoconuts;
      case '노르웨이 파랑 앵무':
        return this.isNailed ? 0 : 10 + this.voltage / 10;
      default:
        return null;
    }
  }
}

export class EuropeanSwallow extends Bird {}
export class AfricanSwallow extends Bird {}
export class NorwegianBlueParrot extends Bird {}