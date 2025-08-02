import { initModels } from "../../../models/init-models.js";
import { sequelize } from "../../../lib/db.js";

const { Users } = initModels(sequelize);

export default async function handler(req, res) {
  if (req.method === "GET") {
    const users = await Users.findAll();
    return res.status(200).json(users);
  }
}
