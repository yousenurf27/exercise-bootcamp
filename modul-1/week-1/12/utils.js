class FoodOrdering {
  constructor() {
    this._queue = [];
  }

  addQueue(name, orders) {
    const obj = {
      name : name,
      orders : orders,
    };

    this._queue.push(obj);
  }

  getQueue() {
    return this._queue;
  }
}

module.exports = { FoodOrdering };