function solution(X, Y, D) {
  // Calculate the distance needed to cover
  const coveredDistance = Y - X;

  // Calculate the number of jumps needed (rounded up to the nearest integer)
  const requIredJumps = Math.ceil(coveredDistance / D);

  return requIredJumps;
}

const X = 10;
const Y = 85;
const D = 30;
console.log(solution(X, Y, D));
