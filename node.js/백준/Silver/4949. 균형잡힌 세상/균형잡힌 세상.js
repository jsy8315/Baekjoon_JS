const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "4949/input_4949.txt")
  .toString()
  .trim()
  .split("\n")

let N = input.length - 1;

for (let i = 0; i < N; i++) {
  let arr = [];
  let target = input[i];
  let targetLength = input[i].length;
  let ok = true;

  for (let j = 0; j < targetLength; j++){
    if ((target[j] === "(") || (target[j] === "[")){
      arr.push(target[j])
    }
    if (target[j]  == ")"){
      if ((arr.length == 0) || (arr[arr.length - 1] !== "(")) {
        ok = false;
        break;
      }
      arr.pop();
    }
    if (target[j]  == "]"){
      if ((arr.length == 0) || (arr[arr.length - 1] !== "[")) {
        ok = false;
        break;
      }
        arr.pop();
    }
  }

  if (arr.length == 0 && ok) {
    console.log("yes")
  } else {
    console.log("no")
  }
}

