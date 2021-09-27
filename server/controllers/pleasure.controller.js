import {decode} from "../utils/authHelpers.js";
import PleasureModel from "../model/pleasure.model.js";
// import {log} from "nodemon/lib/utils";


const getAll = async (req, res) => {
  const {_id: userId} = decode(req.headers["authorization"])
  const allPleasures = await PleasureModel.find({owner: userId});
  
  if (allPleasures) {
    res.send(allPleasures.map(({title, description,_id,owner}) => ({title, description,_id,owner})));
  } else {
    res.status(404);
    res.send({message: 'smth went wrong'})
  }
}

const save = async (req, res) => {
  const {_id: userId} = decode(req.headers["authorization"])
  const pleasureToSave = {...req.body, owner: userId}
  const pleasureFromDB = await PleasureModel.find({owner: userId, title: req.title})
  
  if (!pleasureFromDB.length) {
    const saved = await PleasureModel.create(pleasureToSave)
    res.status(200).send(saved)
  }
  else {
    res.status(409);
    res.send({
      message: 'Pleasure already exists'
    })
  }
}

const update = async (req, res) => {
  const pleasureFromDB = await PleasureModel.findById(req.params.id).exec()

  if (pleasureFromDB) {
    const saved = await PleasureModel.findByIdAndUpdate({_id: pleasureFromDB._id},
        {
          title: req.body.title,
          description: req.body.description
        },
        {new: true}
    )
    res.status(200).send(saved)
  } else {
    res.status(404);
    res.send({
      message: 'Pleasure not found'
    })
  }
}

const deleteOne = async ({ params }, res) => {
  const pleasureFromDB = await PleasureModel.findByIdAndDelete(params.id);
  if (!pleasureFromDB) {
    res.status(404);
    res.send({
      message: "Pleasure not found",
    });
  } else {
    res.send(pleasureFromDB);
  }
};


const PleasuresController = {
  getAll,
  save,
  update,
  delete: deleteOne
}

export default PleasuresController