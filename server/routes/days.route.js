import express from 'express';
import DayController from "../controllers/day.controller.js";

const dayRoutes = express.Router();

dayRoutes.post('/', DayController.save);
dayRoutes.put('/', DayController.update);
dayRoutes.delete('/', DayController.delete);

export default dayRoutes;