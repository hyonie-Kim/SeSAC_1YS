class Cat {
  constructor(name, age) {
    //클래스 속성 - 이름, 나이
    this.name = name;
    this.age = age;
  }
  //메소드
  mew() {
    console.log("야옹 야옹");
  }
  eat() {
    console.log("냠냠");
  }
}

module.exports = { Cat };
