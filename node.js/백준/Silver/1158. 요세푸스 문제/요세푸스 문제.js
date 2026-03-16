const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1158/input_1158.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let N = input[0];
let K = input[1];
let fullArr = [];

for (let i = 1; i < N + 1; i++) {
  fullArr.push(i);
}

let result = [];

while(fullArr.length > 0){
  for (let i = 0; i < K - 1; i++) {
    let temp = fullArr.shift();
    fullArr.push(temp);
  }
  let temp = fullArr.shift();
  result.push(temp);
}

console.log("<" + result.join(", ") + ">");