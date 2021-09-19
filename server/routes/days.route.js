import express from "express";
import DayController from "../controllers/day.controller.js";

const dayRoutes = express.Router();

dayRoutes.get("/", DayController.getAll);
dayRoutes.post("/", DayController.save);
dayRoutes.put("/", DayController.update);
dayRoutes.delete("/:id", DayController.delete);

export default dayRoutes;
