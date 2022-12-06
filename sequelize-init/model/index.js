const Sequelize = require("sequelize"); 
const config = require("../config/config.json")["development"] //1. 시퀄라이즈, config 불러오기

// config = {

// }

const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Visitor = require("./Visitor")(sequelize, Sequelize)
db.User = require("./User")(sequelize, Sequelize)

// db ={
//     "Sequelize":Sequelize,
//     "sequelize": sequelize,
//     "Visitor" : "Visitor.js 에서 return 받은 값을 가지고 있다."
// }

module.exports = db;