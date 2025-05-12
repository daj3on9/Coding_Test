const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "././input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input[0];
const commands = input.slice(1);

const heap = [];

const push = (x) => {
  heap.push(x);
  let i = heap.length - 1;

  while (i > 0) {
    const p = Math.floor((i - 1) / 2);
    if (heap[i] >= heap[p]) break;
    [heap[i], heap[p]] = [heap[p], heap[i]];
    i = p;
  }
};

const pop = () => {
  if (heap.length === 0) return 0;
  if (heap.length === 1) return heap.pop();

  const min = heap[0];
  heap[0] = heap.pop();

  let i = 0;
  const len = heap.length;

  while (true) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let smallest = i;

    if (left < len && heap[left] < heap[smallest]) smallest = left;
    if (right < len && heap[right] < heap[smallest]) smallest = right;

    if (smallest === i) break;

    [heap[i], heap[smallest]] = [heap[smallest], heap[i]]; // swap
    i = smallest;
  }

  return min;
};

const result = [];
commands.forEach((x) => {
  x === 0 ? result.push(pop()) : push(x);
});

console.log(result.join("\n"));
