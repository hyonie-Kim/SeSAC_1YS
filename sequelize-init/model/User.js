const User = (Sequelize, DataTypes) =>{
    return Sequelize.define(
        "user2",
        {
            id:{
                type:DataTypes.STRING(10),
                allowNull: false,
                primaryKey: true
            },
            name:{
                type:DataTypes.STRING(10),
                allowNull: false,
            },
            pw: {
                type:DataTypes.STRING(20),
                allowNull: false
            }
        },
        {
            tableName: "user2",
            freezeTableName: true,
            timestamps: false,
        }
    )
}

module.exports = User;