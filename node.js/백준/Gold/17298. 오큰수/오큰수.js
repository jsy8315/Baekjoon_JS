const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "17298/input_17298.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let N = input[0][0];
let A = input[1]
// console.log(N);
// console.log(A);

let mtStack = [N - 1];
let index = [-1]

  
if (N == 1){
  return console.log(-1)
} 
else {
  for (let i = N - 2; i >= 0; i--) {
    while (A[i] >= A[mtStack[mtStack.length - 1]]) {
      mtStack.pop();
      if (mtStack.length == 0) break;
    }
    if (mtStack.length == 0) {
      mtStack.push(i);
      index.push("x")
    } else {
      mtStack.push(i)
      index.push(mtStack[mtStack.length - 2])
    }
  }
  let reverseIndex = index.reverse();
  let result = [];
  
  // console.log("reverseIndex", reverseIndex);
  
  for (let i = 0; i < reverseIndex.length - 1; i++){
    if (reverseIndex[i] == "x") {
      result.push(-1)  
    } else {
      result.push(A[reverseIndex[i]])
    }
  }
  
  
  result.push(-1);
  console.log(result.join(" ").trim());
}

