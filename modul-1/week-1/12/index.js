const { FoodOrdering } = require('./utils');

const foodOrdering = new FoodOrdering();

foodOrdering.addQueue("Djaka", [
  "Es Teh",
  "Es Jeruk",
  "Mie Gacoan Lv 2",
  "Mie Gacoan Lv 1",
]);

foodOrdering.addQueue("Bella", [
  "Es Teh",
  "Es Gobak Sodor",
  "Mie Gacoan Lv 2",
  "Mie Gacoan Lv 3",
  "Udang Keju",
]);

foodOrdering.addQueue("Paiman", [
  "Es Teh",
  "Es Teklek",
  "Mie Gacoan Lv 2",
  "Mie Gacoan Lv 2",
  "Siomay",
]);

console.log("===== Add orders to queue =====");
console.log(foodOrdering.getQueue());
console.log("\n");

const queue = foodOrdering.getQueue();

const foodOrderHandler = () => {
  return new Promise((res, rej) => {
    const timeout = Math.round(Math.random() * 10000);
    const inSecond = Math.round(timeout / 1000)
    setTimeout(() => {
      res(inSecond)
    }, timeout);
  });
}

const asyncAwait = async () => {
  let i = 0;
  let time = 0;

  while (queue[i]) {
    await foodOrderHandler()
    .then((res) => {
      time += res;
      const strTime = Math.floor((time / 60)) == 0  ? `${time} detik` : `${Math.round(time / 60) + ":" + time % 60} menit`;
      console.log(`Pesanan ${queue[i].name} selesai diproses dalam waktu ${strTime}`);
    })

    i++;
  };
}

console.log("Run process -> process queue based on random interval");
asyncAwait();
