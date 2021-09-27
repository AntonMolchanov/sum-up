import express from "express";
import PleasuresController from "../controllers/pleasure.controller.js";

const pleasuresRoutes = express.Router();

pleasuresRoutes.get("/", PleasuresController.getAll);
pleasuresRoutes.post("/", PleasuresController.save);
pleasuresRoutes.put("/:id", PleasuresController.update);
pleasuresRoutes.delete("/:id", PleasuresController.delete);

export default pleasuresRoutes;
