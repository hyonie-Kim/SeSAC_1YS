const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"]; //1. 시퀄라이즈, config 불러오기

// config = {

// }

const db = {};

const sequelize = new Sequelize( // 새로운 시퀄라이즈 객체 생성 (객체 내부에는 db 연결 정보를 가지고 있음)
  config.database,
  config.username,
  config.password,
  config
);

// 연결 객체를 나중에 재사용하기 위함
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db와 테이블 연결
// db객체 모델을 담아두기 때문에 db객체를 require해서 Visitor, User 모델에 접근 가능
db.Visitor = require("./Visitor")(sequelize, Sequelize);
db.User = require("./User")(sequelize, Sequelize);

// db ={
//     "Sequelize":Sequelize,
//     "sequelize": sequelize,
//     "Visitor" : "Visitor.js 에서 return 받은 값을 가지고 있다."
// }

module.exports = db;
