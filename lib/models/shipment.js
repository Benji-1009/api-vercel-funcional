import { DataTypes } from "sequelize";

export default (sequelize) => {
  return sequelize.define(
    "Shipment",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      code: DataTypes.STRING,
      details: DataTypes.STRING,
    },
    {
      tableName: "shipment",
      timestamps: false,
    }
  );
};
