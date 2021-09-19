import {decode} from "../utils/authHelpers.js";
import PleasureModel from "../model/pleasure.model.js";


const get = async (req, res) => {
  const {_id: userId} = decode(req.headers["authorization"])
  const allPleasures = await PleasureModel.find({owner: userId});
  
  if (allPleasures) {
    res.send(allPleasures.map(({title, description}) => ({title, description})));
  } else {
    res.status(404);
    res.send({message: 'smth went wrong'})
  }
}

const save = async (req, res) => {
  const {_id: userId} = decode(req.headers["authorization"])
  const pleasureToSave = req.body
  const pleasureFromDB = await PleasureModel.find({owner: userId, title: req.title})
  
  if (!pleasureFromDB) {
    const saved = await PleasureModel.save(pleasureToSave)
    res.status(200).send(saved)
  } else {
    res.status(409);
    res.send({
      message: 'Pleasure already exists'
    })
  }
}

const update = async (req, res) => {
  const {_id: userId} = decode(req.headers["authorization"])
  const pleasureFromDB = await PleasureModel.find({owner: userId, title: req.title})
  
  if (pleasureFromDB) {
    const saved = await PleasureModel.update({...pleasureFromDB}, {
      title: req.body.title,
      description: req.body.description
    })
    res.status(200).send(saved)
  } else {
    res.status(404);
    res.send({
      message: 'Pleasure not found'
    })
  }
}

const deleteOne = async (req, res) => {
  const {_id: userId} = decode(req.headers["authorization"])
  const pleasureFromDB = await PleasureModel.findOne({_id: req.params.id});
  
  if (pleasureFromDB && pleasureFromDB.owner === userId) {
    const deleted = await PleasureModel.delete({_id: pleasureFromDB['_id']});
    if (deleted.ok > 0) {
      res.send(pleasureFromDB);
    } else {
      res.status(204);
      res.send({message: 'something went wrong'});
    }
  } else {
    res.status(404);
    res.send({
      message: 'Pleasure not found'
    })
  }
}


const PleasuresController = {
  get,
  save,
  update,
  delete: deleteOne
}

export default PleasuresController