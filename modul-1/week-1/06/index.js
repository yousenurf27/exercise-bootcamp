const dataStudent = [
  {
    name: "Yoga",
    email: "yoga27@gmail.com",
    age: "1998-09-17",
    score: 89,
  },
  {
    name: "Bianka",
    email: "bianka12@gmail.com",
    age: "2000-06-26",
    score: 80,
  },
  {
    name: "Sabrina",
    email: "sabrina2@gmail.com",
    age: "1999-02-12",
    score: 95,
  },
  {
    name: "Reza",
    email: "reza23@gmail.com",
    age: "1999-05-23",
    score: 75,
  },
  {
    name: "Sadewa",
    email: "sadewa3@gmail.com",
    age: "1999-10-13",
    score: 70,
  },
];

const calDataStudent = (data) => {
  const scores = data.map(dt => dt.score);
  const ages = data.map(dt => new Date().getFullYear() - new Date(dt.age).getFullYear());

  return {
    score: {
      highest: Math.max(...scores),
      lowest: Math.min(...scores),
      average: scores.reduce((total, num) => total + num) / scores.length,
    },
    age: {
      highest: Math.max(...ages),
      lowest: Math.min(...ages),
      average: ages.reduce((total, num) => total + num) / ages.length,
    }
  }
}

console.log(calDataStudent(dataStudent))
console.log("\n");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  total = 0;
  product = [];

  constructor() {
    this.total;
    this.product;
  }

  addToCart(product, qty) {
    this.product.push({
      product,
      qty,
    });

    this.total += product.price * qty;
  }

  getTotal() {
    return `Total product: Rp. ${this.total}`;
  }

  getCheckout() {
    const products = this.product.map(dt => {
      return {
        name: dt.product.name,
        price: dt.product.price,
        qty: dt.qty,
      }
    });

    return products;
  }
}

const mieGacoanLv1 = new Product("Mie Gacoan Lv 1", 10000);
const mieGacoanLv2 = new Product("Mie Gacoan Lv 2", 10000);
const esTeh = new Product("Es Teh", 5000);

const transaction = new Transaction();

transaction.addToCart(mieGacoanLv1, 2);
transaction.addToCart(mieGacoanLv2, 2);
transaction.addToCart(esTeh, 4);

console.log(transaction.getTotal());
console.log(transaction.getCheckout());
