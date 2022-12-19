const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"]; //1. 시퀄라이즈, config 불러오기

const db = {};

const sequelize = new Sequelize( // 새로운 시퀄라이즈 객체 생성 (객체 내부에는 db 연결 정보를 가지고 있음)
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./User")(sequelize, Sequelize); // 시퀄라이즈 모델로 선택해서 DB에 생성

module.exports = db;
