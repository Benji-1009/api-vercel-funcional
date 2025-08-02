// api/platforms/index.js
import { initModels } from "../../../models/init-models.js";
import { sequelize } from "../../../lib/db.js";

const { Platforms } = initModels(sequelize);

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const platforms = await Platforms.findAll();
      return res.status(200).json(platforms);
    } else {
      res.status(405).json({ msg: "Método no permitido" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Error interno", error: error.message });
  }
}
