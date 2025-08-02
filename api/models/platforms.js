import { DataTypes } from "sequelize";

export default (sequelize) => {
  return sequelize.define(
    "Platforms",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      tableName: "plataforms",
      timestamps: false,
    }
  );
};
