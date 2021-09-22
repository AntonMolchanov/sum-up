import express from "express";
import PleasuresController from "../controllers/pleasure.controller.js";

const pleasuresRoutes = express.Router();

pleasuresRoutes.get("/:owner", PleasuresController.getAll);
pleasuresRoutes.post("/", PleasuresController.save);
pleasuresRoutes.put("/", PleasuresController.update);
pleasuresRoutes.delete("/:id", PleasuresController.delete);

export default pleasuresRoutes;
