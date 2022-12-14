const User = (Sequelize, DataTypes) => {
  return Sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        primaryKey: true,
      },
      pw: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      mbti: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      imgpath: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaulteValue: "user_default_img.jpg",
      },
    },
    {
      tableName: "User",
      freezeTableName: true,
      timestamps: false,
    }
  );
};

module.exports = User;
