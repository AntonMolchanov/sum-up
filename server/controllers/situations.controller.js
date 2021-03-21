import { response } from "express";
import jwt from "jsonwebtoken";
import config from "../config.js";
import DayModel from "../model/day.model.js";
import SituationsModel from "../model/situation.model.js";
import UserModel from "../model/user.model.js";
import authHelpers from "../utils/authHelpers.js";

const mapBodyToSituation = ({ situationName, day, ...rest }) => ({
  title: situationName,
  ...rest,
  day: new Date(day),
});

const getAll = async (req, res) => {
  const { _id } = authHelpers.decode(req.headers["authorization"]);
  const allSituations = await SituationsModel.find({ author: _id }).sort({
    day: -1,
  });
  if (allSituations) {
    res.send(allSituations);
  } else {
    res.status(404);
    res.send({ message: "smth went wrong" });
  }
};

const saveSituation = async ({ body }, res) => {
  const dbSituation = await SituationsModel.findOne({
    day: new Date(body.day),
    title: body.situationName,
  });

  if (!dbSituation) {
    const newSituation = await SituationsModel.create(mapBodyToSituation(body));

    if (!newSituation) {
      res.status(500);
      res.send("Could not create a Situation");
    } else {
      res.send(newSituation);
    }
  } else {
    res.status(409);
    res.send("Situation already exists");
  }
};

const updateSituation = async (req, res) => {};

const deleteSituation = async ({ params }, res) => {
  const dbSituation = await SituationsModel.findByIdAndDelete(params.id);
  if (!dbSituation) {
    res.status(404);
    res.send({
      message: "No any items",
    });
  } else {
    res.send(dbSituation);
  }
};

const SituationsController = {
  getAll,
  save: saveSituation,
  update: updateSituation,
  delete: deleteSituation,
};

export default SituationsController;
