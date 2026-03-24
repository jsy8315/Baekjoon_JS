const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "6198/input_6198.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let N = input[0];
let arr = [];
let mtStack = [N - 1];
let index = ["lastOne"];


for (let i = 1; i < N + 1; i++) {
  arr.push(input[i]);
}

// console.log("N : ", N);
// console.log("arr : ", arr);
// console.log("mtStack : ", mtStack);

if (N == 1) {
  console.log(0);
} 
else {
  for (let i = N - 2; i >= 0; i--) {
    while (arr[i] > arr[mtStack[mtStack.length - 1]]){
      mtStack.pop();
      if (mtStack.length == 0) break;
    }

    if (mtStack.length == 0) {
      index.push("x")
      mtStack.push(i);
    } else {
      mtStack.push(i);
      index.push(mtStack[mtStack.length - 2]);
    }
  }
}

// console.log("arr : ", arr);
// console.log("mtStack : ", mtStack);
// console.log("index: ", index);

let reverseIndex = index.reverse();
let result = 0;

for(let i = 0; i < reverseIndex.length - 1; i++) {
  if (reverseIndex[i] == "x") {
    result += (N - i- 1)
    // console.log(i, result)
  } else {
    result += (reverseIndex[i] - i - 1)
    // console.log(i, result)
  }
}

console.log(result);
  


