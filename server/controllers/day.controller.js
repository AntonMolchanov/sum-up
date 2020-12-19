import DayModel from '../model/day.model.js';


const mapReqDayToNew = (body) => ({
  date: body.date,
  situations: body.situations,
  owner: body.owner
});

const saveDay = async (req, res) => {
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
    const created = await DayModel.create(mapReqDayToNew(req.body))
    res.send(created)
  } else {
    res.status(409);
    res.send({
      message: 'Day already exists or you already created one at the same day'
    })
  }
};

const updateDay = async (req, res) => {
  const dayFromDB = await DayModel.findOne({date: req.body.date});
  
  if (dayFromDB) {
    const updated = await DayModel.updateOne({...dayFromDB}, {...req.body});
    res.send(updated);
  } else {
    res.status(404);
    res.send({
      message: 'day not found'
    })
  }
}

const deleteDay = async (req, res) => {
  const dayFromDB = await DayModel.findOne({date: req.body.date});
  
  if (dayFromDB) {
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
  save: saveDay,
  update: updateDay,
  delete: deleteDay
}
export default DayController;