const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "18258/input_18258.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(' '))

let N = Number(input[0]);
let que = [];
let head = 0;
let result = [];
// let realLength = que.length - head;

for (let i = 1; i < N + 1; i++) {
  if (input[i][0] == "push") {
    que.push(Number(input[i][1]));
    // console.log("que, head", que, head);
  }


  if (input[i][0] == "pop") {
    if ((que.length - head) == 0) {
      result.push(-1);
      // console.log("que, head", que, head);
    } else {
      result.push(que[head])
      head++;
      // console.log("que, head", que, head);
    }
  }

  if (input[i][0] == "size") {
    // console.log(que.length - head)
    result.push(que.length - head)
    // console.log("que, head", que, head);
  }

  if (input[i][0] == "empty") {
    if ((que.length - head) == 0) {
      // console.log(1);
      result.push(1)
      // console.log("que, head", que, head);
    } else {
      // console.log(0);
      result.push(0)
      // console.log("que, head", que, head);
    }
  }

  if (input[i][0] == "front") {
    if ((que.length - head) == 0) {
      // console.log("que", que)
      // console.log(-1);
      result.push(-1)
      // console.log("que, head", que, head);
    } else {
      // console.log(que[head]);
      result.push(que[head]);
      // console.log("que, head", que, head);
    }
  }

  if (input[i][0] == "back") {
    if ((que.length - head) == 0) {
      // console.log(-1);
      result.push(-1)
      // console.log("que, head", que, head);
    } else {
      // console.log(que[que.length - 1]);
      result.push(que[que.length - 1]);
      // console.log("que, head", que, head);
    }
  }
}

// for (let i = 0; i < result.length; i++) {
//   console.log(result[i])
// }

process.stdout.write(result.join('\n') + '\n');