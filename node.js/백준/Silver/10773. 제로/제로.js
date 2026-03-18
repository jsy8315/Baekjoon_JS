const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "10773/input_10773.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let K = input[0];

let result = [];

let answer = 0;

for (let i = 1; i < K + 1; i++){
  if (input[i] != 0) {
    result.push(input[i]);
  } else {
    result.pop();
  }
}

for (let i = 0; i < result.length; i++) {
  answer += result[i];
}

console.log(answer);