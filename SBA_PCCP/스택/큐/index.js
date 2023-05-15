function solution(common) {
  var answer = 0;

  var first = common[1] - common[0];
  var second = common[2] - common[1];

  if (first == second) {
    // answer = common[common.length - 1] + first;
    answer = common.pop() + first;
  } else {
    answer = (common[common.length - 1] * common[1]) / common[0];
  }

  return answer;
}

const common = [2, 4, 8];

console.log(solution(common));

// 괄호 실습

function solution2(s) {
  var answer = true;
  var stack = [];

  for (var idx = 0; idx < s.length; idx++) {
    if (s[idx] == "(") {
    } else {
    }
  }
  return answer;
}
