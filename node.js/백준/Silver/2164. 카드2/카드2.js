const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2164/input_2164.txt")
  .toString()
  .trim()
  .split("\n")

let N = Number(input[0]);
let head = 0;
let arr = [];

for (let i = 1; i < N + 1; i++) {
  arr.push(i);
}

while ((arr.length - head) != 1) {
  head++;
  arr.push(arr[head]);
  head++
  // console.log("head, arr", head, arr)
}

console.log(arr[arr.length - 1]);
