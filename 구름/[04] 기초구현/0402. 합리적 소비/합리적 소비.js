const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
const items = [];

rl.on("line", (line) => {
  if (n === 0) {
    n = Number(line);
  } else {
    const [name, prices] = line.split(" ");
    const price = Number(prices);
    items.push({ name, price });

    if (items.length === n) {
      let maxItem = items[0];
      let minItem = items[0];

      for (let item of items) {
        if (item.price > maxItem.price) {
          maxItem = item;
        }
        if (item.price < minItem.price) {
          minItem = item;
        }
      }

      console.log(`${maxItem.name} ${maxItem.price}`);
      console.log(`${minItem.name} ${minItem.price}`);
      rl.close();
    }
  }
});

rl.on("close", () => process.exit());
