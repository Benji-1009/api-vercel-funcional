import _Users from "./users.js";
import _Platforms from "./platforms.js";
import _Shipment from "./shipment.js";

export function initModels(sequelize) {
  const Users = _Users(sequelize);
  const Platforms = _Platforms(sequelize);
  const Shipment = _Shipment(sequelize);

  return {
    Users,
    Platforms,
    Shipment,
  };
}
