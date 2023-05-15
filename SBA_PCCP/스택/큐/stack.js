class Stack {
  /*
    Stack 클래에스는 두가지 속성이 있다.
    data -> 값을 저장하는 배열이다.
    top -> 최상위 요소 인덱스를 가리킨다.
    */
  constructor() {
    this.data = [];
    this.top = 0;
  }
}

/*
    push: 스택의 맨 위에 요소 삽입
    요소를 스택에 push 할때 데이터의 맨 위 위치에 저장해야하고 맨위가
    다음 빈 위치를 가리키도록 top 변수를 증가시켜야 한다.
*/
// push(element){
//     this.data[this.top] = element;
//     this.top = this.top + 1;
// }

// const stack = new Stack()
// stack.push('초콜렛')

// 시간복잡도 for문
var number = 7;

/*
if (number == 7) {
  console.log("seven");
} //시간 복잡도 1
*/
var numberr = 7;
for (var idx = 0; idx < 20; idx++) {
  if (numberr == 20) {
    console.log("sehyone");
  }
}
