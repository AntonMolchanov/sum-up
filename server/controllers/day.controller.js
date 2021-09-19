import DayModel from '../model/day.model.js';
import {decode} from "../utils/authHelpers";

const getAll = async (req, res) => {
  const {_id: userId} = decode(req.headers["authorization"])
  const allDays = await DayModel.find({owner: userId});
  
  if (allDays) {
    res.send(allDays.map(({pleasures, date}) => ({pleasures: pleasures.map(p => p.title), date})));
  } else {
    res.status(404);
    res.send({message: 'smth went wrong'})
  }
}

const saveDay = async (req, res) => {
  const {_id: userId} = decode(req.headers["authorization"])
  const searchedDate = new Date(req.body.date);
  searchedDate.setHours(0, 0, 0, 0);
  const nextDay = new Date(req.body.date);
  nextDay.setDate(nextDay.getDate() + 1);
  nextDay.setHours(0, 0, 0, 0);
  
  const dayFromDB = await DayModel.findOne({
    date: {
      "$gte": searchedDate,
      "$lt": nextDay
    }
  });
  
  if (!dayFromDB) {
    const created = await DayModel.create({...req.body, owner: userId})
    res.send(created)
  } else {
    res.status(409);
    res.send({
      message: 'Day already exists'
    })
  }
};

const updateDay = async (req, res) => {
  const {_id: userId} = decode(req.headers["authorization"])
  const dayFromDB = await DayModel.findOne({date: req.body.date});
  
  if (dayFromDB && dayFromDB.owner === userId) {
    const {title: updatedTitle, description: updatedDescription} = req.body
    const updated = await DayModel.updateOne({...dayFromDB}, {title: updatedTitle, description: updatedDescription});
    res.send(updated);
  } else {
    res.status(404);
    res.send({
      message: 'Day not found'
    })
  }
}

const deleteDay = async (req, res) => {
  const {_id: userId} = decode(req.headers["authorization"])
  const dayFromDB = await DayModel.findOne({_id: req.params.id});
  
  if (dayFromDB && dayFromDB.owner === userId) {
    const deleted = await DayModel.deleteOne({_id: dayFromDB['_id']});
    if (deleted.ok > 0) {
      res.send(dayFromDB);
    } else {
      res.status(204);
      res.send({message: 'something went wrong'});
    }
  } else {
    res.status(404);
    res.send({
      message: 'day not found'
    })
  }
}

const DayController = {
  getAll,
  save: saveDay,
  update: updateDay,
  delete: deleteDay
}
export default DayController;