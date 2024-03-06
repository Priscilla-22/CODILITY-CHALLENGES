function solution(A) {
  const distinctSet = new Set(A);
  return distinctSet.size;
}

const A = [2, 1, 1, 2, 3, 1];
console.log(solution(A)); 
