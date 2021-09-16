export class Player {
  constructor(name) {
    this.name = name;
    this.iq = 100;
    this.exp = 0;
    this.level = 0;
    this.items = [];
    this.attack = 10;
  }
}

//tank
export class Professor extends Player {
  constructor(name){
    super(name);
    this.iq = 110;
  }
}

export class LiberalArts extends Player {
  constructor(name) {
    super(name);
    this.exp = 10;
    // unique ability "coffee" that lets them take one extra turn
  }
}

export class DramaMajor extends Player {
  constructor(name) {
    super(name);
    this.exp = 10;
    //unique "burst into song" ability; confuses enemy and makes damage taken= 0 for one turn
  }
}

export class Jock extends Player {
  constructor(name) {
    super(name);
    this.iq= 90;
    //unique ability "get stoked" causes player to do more damage for one turn
  }
}

export class Engineer extends Player {
  constructor(name) {
    super(name);
    this.iq = 110;
    // unique ability "all nighter" will eliminate two of the wrong answers to multiple choice questions
  }
}

export class GreekLife extends Player {
  constructor(name) {
    super(name);
    this.iq= 90;
    //unique ability "phone bro(sette)" that allows player to skip a turn and get one free answer.
  }
}