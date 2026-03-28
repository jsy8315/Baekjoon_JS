const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1629/input_1629.txt")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

let A = input[0];
let B  = input[1];
let C = input[2];

// B가 짝수, 홀수에 따라 다르게

function powerDivider(a, b, c){
  if (b === 1n) {
    return a % c
  } 

  if (b === 0n) {
    return 1n
  }

  if (b % 2n == 0n){
    let h = powerDivider(a, (b / 2n), c) ;
    return (h * h) % c;
  } else {
    return (a * powerDivider(a, b - 1n, c)) % c
  }
}

console.log(powerDivider(A, B, C).toString());  