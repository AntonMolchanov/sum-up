import DayModel from '../model/day.model.js';


const mapReqDayToNew = (body) => ({
  date: body.date,
  situations: body.situations,
  owner: body.owner
});

const saveDay = async (req, res) => {
  const dayFromDB = await DayModel.findOne({date: req.body.date});
  if (!dayFromDB) {
    DayModel.create(mapReqDayToNew(req.body), (err, created) => {
      if (err) {
        res.status(500);
        res.send(err);
      }
        res.send(created)
      }
    );
  } else {
    res.status(409);
    res.send({
      message: 'User already exists'
    })
  }
};

const updateDay = async (req, res) => {
  const dayFromDB = await DayModel.findOne({date: req.body.date});
  
  if (dayFromDB) {
    DayModel.update({...dayFromDB}, {...req.body}, (err, updated) => {
      if (err) {
        res.send({
          message: "couldn't update",
          err
        })
      }
      res.send(updated);
    })
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
    DayModel.deleteOne({...dayFromDB}, (err, deleted) => {
      if (err) {
        res.send({
          message: "couldn't delete",
          err
        })
      }
      res.send(deleted);
    })
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