const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "9935/input_9935.txt")
  .toString()
  .trim()
  .split("\n")

let arr = input[0];
let bomb = input[1]

let result = [];
let bombStack = [];

for (let i = 0; i < arr.length; i++){
  result.push(arr[i]);

  if (result[result.length - 1] == bomb[bomb.length - 1]){
    if ( (result.slice(-bomb.length)).join("") === bomb){
      // console.log(i);
      // console.log((result.slice(i + 1 - bomb.length, i + 1)).join(""));
      let count = bomb.length;
      while (count > 0) {
        result.pop();
        count--;
      }
    }
  }
}

if (result.length === 0){
  console.log("FRULA")
} else {
  console.log(result.join(""));
}
// console.log(result.splice(1, 3).join(""))
// console.log(bomb);
