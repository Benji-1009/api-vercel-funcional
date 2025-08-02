// api/shipment/index.js
import { initModels } from "../../../models/init-models.js";
import { sequelize } from "../../../lib/db.js";

const { Shipment } = initModels(sequelize);

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const shipment = await Shipment.findAll();
      return res.status(200).json(shipment);
    } else {
      res.status(405).json({ msg: "Método no permitido" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error interno", error: error.message });
  }
}
