const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "2493/input_2493.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) =>  el.split(" ").map(Number));

let N = input[0][0];
let arr = input[1];
let answer = [];
let mtStack = [];

mtStack.push(arr[0]);
answer.push(0);

let map = new Map();

for (let i = 0; i < N; i++) {
  map.set(arr[i], i);
}

for (let i = 1; i < N; i++) {
  while(mtStack[mtStack.length - 1] < arr[i]) {
    mtStack.pop();
    
    if (mtStack.length == 0) break;
  }
  
  mtStack.push(arr[i]);

  if (mtStack.length == 1){
    answer.push("x");
  } else {
    answer.push(map.get(mtStack[mtStack.length - 2]))
  }
  

  // console.log("i : " + i + " " + "mtStack : " + mtStack)
  // console.log("i : " + i +  " " + "answer : " + answer )
}

let result = [0];

for (let i = 1; i < answer.length; i++) {
  if (answer[i] != "x") {
    result.push(answer[i] + 1);
  } else {
    result.push(0)
  }
}

console.log(result.join(" "))