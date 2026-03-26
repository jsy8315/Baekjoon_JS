const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "10866/input_10866.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(' '))

let N = Number(input[0]);
// let deque = [];
let head = 15000;
let tail = 15000;
let result = [];
let dequeHead = [];

let deque = new Array(30000);

for (let i = 1; i < N + 1; i++) {

  if (input[i][0] == "push_front") {
    deque[head - 1] = Number(input[i][1]);
    head--;
  }

  if (input[i][0] == "push_back") {
    deque[tail] = Number(input[i][1]);
    tail++;
  }

  if (input[i][0] == "pop_front") {
    if ((tail - head) == 0) {
      result.push(-1)
    } else {
      result.push(deque[head]);
      head++;
    }

  }

  if (input[i][0] == "pop_back") {
    if ((tail - head) == 0) {
      result.push(-1)
    } else {
      result.push(deque[tail - 1]);
      tail--;
    }
  }
  

  if (input[i][0] == "size") {
    result.push(tail - head);
  }

  if (input[i][0] == "empty") {
    if ((tail - head) == 0) {
      result.push(1)
    } else {
      result.push(0)
    }
  }

  if (input[i][0] == "front") {
    if ((tail - head) == 0) {
      result.push(-1)
    } else {
      result.push(deque[head]);
    }
  }

  if (input[i][0] == "back") {
    if ((tail - head) == 0) {
      result.push(-1)
    } else {
      result.push(deque[tail- 1]);
    }
  }
}

process.stdout.write(result.join('\n') + '\n');