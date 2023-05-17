function solution(array) {
  var answer = [];
  let maxNum = Math.max(...array);
  let result = array.indexOf(maxNum);
  answer.push(maxNum, result);

  return answer;
}

let array = [1, 8, 3];

console.log(solution(array));
