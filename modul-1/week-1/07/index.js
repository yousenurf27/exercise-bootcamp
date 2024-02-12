const checkObjIsSame = (obj1, obj2) => {
  if (obj1.a === obj2.a) {
    return true;
  } else {
    return false
  }
}

console.log(checkObjIsSame({ a: 1 }, { a: 1 }));
console.log("\n");

const intersectionObj = (obj1, obj2) => {
  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);

  let newObj = {};

  for (let key1 of keysObj1) {
    for (let key2 of keysObj2) {
      if (key1 == key2) {
        newObj[key2] = obj1[key2]
      }
    }
  }

  return newObj;
}

console.log(intersectionObj({ a: 1, b: 2 }, { a: 1, c: 3 }));
console.log("\n");

const array1 = [
  { name: "Student 1", email : "student1@mail.com" },
  { name: "Student 2", email : "student2@mail.com" }
];

const array2 = [
  { name: "Student 1", email : "student1@mail.com" },
  { name: "Student 3", email : "student3@mail.com" }
];

const concatArr = array1.concat(array2);

const removeDupilcateArray = (data, key) => {
  return [
    ...new Map(
      data.map(dt => [key(dt), dt])
    ).values()
  ];
}

console.log(removeDupilcateArray(concatArr, it => it.name));
console.log("\n");

/* Create a function that can accept input as an array of objects and switch all values into property and
property into value */

const swapObjcValue = (data) => {
  const newArrObj = [];
  
  data.map((dt) => {
    const newObj = {};

    for (let key in dt) {
      newObj[dt[key]] = key;
    }

    newArrObj.push(newObj);
  })

  return newArrObj;
}

console.log(swapObjcValue([{ name: "David", age: 20 }]));
console.log("\n");

// Create a function to find a factorial number using recursion
const factorial = (num) => {
  let str = "";
  let total = 0;

  for (let i = num; i >= 1; i--) {
    if (i == num) {
      str += i;
      total = i;
      continue;
    }

    str += " x " + i;
    total = i * total;
  }

  return `${num}! = ${str} = ${total}`;
}

console.log(factorial(5));
console.log("\n");

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    const health = Math.random() < 0.5 ? 0 : 10;
    const power = Math.random() < 0.5 ? 0 : 10;

    return { health, power };
  }

  start() {
    let lastTimeShooter = Math.random() < 0.5 ? this.player1.name : this.player2.name;
    do {
      console.log(`Turn shooting: ${lastTimeShooter}`);
      console.log("Player Status Before Shooting:");
      this.player1.showStatus();
      this.player2.showStatus();

      const item1 = this.getRandomItem();
      const item2 = this.getRandomItem();

      this.player1.useItem(item1);
      this.player2.useItem(item2);

      console.log("Player Status After Get Random Item:");
      this.player1.showStatus();
      this.player2.showStatus();

      if (lastTimeShooter == this.player1.name) {
        this.player2.hit(this.player1.power);
        lastTimeShooter = this.player2.name;
      } else {
        this.player1.hit(this.player2.power);
        lastTimeShooter = this.player1.name;
      }

      console.log("Player Status After Shooting:");
      this.player1.showStatus();
      this.player2.showStatus();

      console.log("\n");
    }
    while (this.player1.health > 0 && this.player2.health > 0);

    if (this.player1.health <= 0 || this.player2.health <= 0) {
      if (this.player1.health > this.player2.health) {
        console.log(`${this.player1.name} wins!`);
      } else {
        console.log(`${this.player2.name} wins!`);
      }
    }
  }
}

class Player {
  constructor(name, health = 100, power = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  hit(power) {
    this.health -= power;

    if (this.health < 0) {
      this.health = 0;
    }
  }

  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    console.log(`${this.name} => (Health => ${this.health}, Power => ${this.power})`);
  }
}

const player1 = new Player("Player 1");
const player2 = new Player("Player 2");

const game = new ShootingGame(player1, player2);

game.start();
