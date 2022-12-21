const User2 = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "User2",
    {
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING(50),
        allowNull: false,
        primaryKey: true,
      },
      userPw: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    {
      tableName: "User2",
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = User2;
