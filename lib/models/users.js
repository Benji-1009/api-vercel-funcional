import { DataTypes } from "sequelize";

export default (sequelize) => {
  return sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      password: DataTypes.STRING,
      platforms: DataTypes.STRING,
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );
};
