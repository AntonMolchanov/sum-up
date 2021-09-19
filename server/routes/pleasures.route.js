import express from "express";
import PleasuresController from "../controllers/pleasure.controller.js";

const dayRoutes = express.Router();

dayRoutes.get("/:owner", PleasuresController.getAll);
dayRoutes.post("/", PleasuresController.save);
dayRoutes.put("/", PleasuresController.update);
dayRoutes.delete("/:id", PleasuresController.delete);

export default dayRoutes;
