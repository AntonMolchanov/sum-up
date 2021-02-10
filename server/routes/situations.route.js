import express from "express";
import SituationsController from "../controllers/situations.controller.js";

const situationsRoutes = express.Router();

situationsRoutes.get("/", SituationsController.getAll);
situationsRoutes.post("/", SituationsController.save);
situationsRoutes.put("/:id", SituationsController.update);
situationsRoutes.delete("/:id", SituationsController.delete);

export default situationsRoutes;
