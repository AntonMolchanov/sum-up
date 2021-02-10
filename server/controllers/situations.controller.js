import { response } from "express";
import jwt from "jsonwebtoken";
import config from "../config.js";
import DayModel from "../model/day.model.js";
import SituationsModel from "../model/situation.model.js";
import UserModel from "../model/user.model.js";

const mapBodyToSituation = (body) => ({
  title: body.situationName,
  day: new Date(body.day),
  reasons: body.reasons,
  positives: body.positives,
  rationals: body.rationals,
  subconscious: body.subconscious,
});

const getAll = async (req, res) => {
  const allSituations = await SituationsModel.find({});
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
