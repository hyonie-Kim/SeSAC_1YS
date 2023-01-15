const { Cat } = require("./CatClass.js");
console.log("Cat 클래스", Cat);

let cat1 = new Cat("로이", 1);

console.log(`제 고양이 이름은 ${cat1.name}입니다.`);
cat1.mew();
cat1.eat();
