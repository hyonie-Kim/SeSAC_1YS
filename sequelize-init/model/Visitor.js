const Visitor = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "visitor", //create table visitor ()
    {
      id: {
        // id int not null primary key auto_increment
        type: DataTypes.INTEGER,
        allowNull: false, // Null을 허용하지 않음
        primaryKey: true, // 기본값 false
        autoIncrement: true,
      },
      name: {
        // name varchar(10) not null
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      comment: {
        // comment mediumText
        type: DataTypes.TEXT("medium"),
      },
    },
    {
      tableName: "visitor",
      freezeTableName: true,
      timestamps: false, // default true createAt modifyAt
    }
  );
};

module.exports = Visitor;
