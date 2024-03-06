function solution(N) {
  // Implement your solution here

  //change N to binary string
  let binaryNum = N.toString(2);

  //store the current gap and the longest gap so that they can be updated on the go
  let currentGap = 0;
  let longestGap = 0;

  //iterate through the binary string
  for (let i = 0; i < binaryNum.length; i++) {
    //increment the current gap if the binary string contains a zero(0)
    if (binaryNum[i] === '0') {
      currentGap++;
    }
    //else if binary sting contains 1
    else if (binaryNum[i] === '1') {
      //update the longestGap variable with the maximum value between the current value of longestGap and the value of currentGap.
      longestGap = Math.max(longestGap, currentGap);
      //reset the currentGap variable to 0.
      currentGap = 0;
    } else {
      //if there are no binary gap return 0
      return 0;
    }
  }
  return longestGap;
}



console.log(`The Binary Gap is: ${solution(32)}`);
console.log(`The Binary Gap is: ${solution(147)}`);
