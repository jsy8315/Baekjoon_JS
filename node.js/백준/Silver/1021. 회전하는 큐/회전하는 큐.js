const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "1021/input_1021.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(' '))

let N = Number(input[0][0]);
let M = Number(input[0][1]);

// console.log("N, M : ", N, M, a);

// let arr = new Array(1000);

// console.log(arr.length);

// let head = 500;
// let tail = 500;

// for (let i = 0; i < N; i++){
//   arr[tail] = i + 1;
//   tail++;
// }

// console.log("arr", arr)

// let moveLeftCount = 0;
// let moveRightCount = 0;

// function getFirstElement(array, head, tail) {
//   head++;
// }

// function moveLeft() {
//   arr[tail] = arr[head];
//   head++
//   tail++;
//   moveLeftCount++;
// }

// function moveRight() {
//   arr[head - 1] = arr[tail - 1];
//   head--;
//   tail--;
//   moveRightCount++;
// }

// for (let i = 0; i < M; i++){
//   console.log(input[1][i])

// }

let arr = new Array(N);

let originArr = new Array(N);

let moveLeftCount = 0;
let moveRightCount = 0;

for (let i = 0; i < N; i++){
  arr[i] = i + 1;
}

for (let i = 0; i < N; i++){
  originArr[i] = i + 1;
}

// arr.shift();

// console.log(arr);

function getFirstElement(array, head, tail) {
  array.shift();
}

function moveLeft(array) {
  array.push(arr[0]);
  array.shift();
  moveLeftCount++;
}

function moveRight(array) {
  array.unshift(arr[arr.length - 1]);
  array.pop();
  moveRightCount++;
}

// console.log(Math.round(11/2));

for (let i = 0; i < M; i++) {
  let findElement = arr.indexOf(Number(input[1][i]));
  let target = Number(Number(input[1][i]));
  if ( arr.length - findElement >= findElement) {
    while(arr[0] != target) {
      moveLeft(arr);
      // console.log("moveLeftCount : ", moveLeftCount);
    }
    getFirstElement(arr);
  } 
  else {
    while(arr[0] != target) {
      moveRight(arr);
      // console.log("moveRightCount : ", moveRightCount);
    }
    getFirstElement(arr);
  }
  // console.log("i, arr : ", i, arr);
}

console.log(moveLeftCount + moveRightCount);