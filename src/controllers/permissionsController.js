import dotenv from 'dotenv';
import model from '../models';

const { Permission } = model;

dotenv.config();

const createPermission = async (req, res) => {
  // static create(req, res) {
  const { name, description } = req.body;
  try {
    await Permission.create({
      name,
      description,
      });
    return res.status(201).send({message: 'Permission created successfully'});
  }
  catch(e) {
    console.log(e);
    return res.status(500)
    .send(
      {message: 'Could not perform operation at this time, kindly try again later.'});}
      
}
const allPermissions = (req, res) => {
  return Permission.findAll()

    .then((data) => {
      console.log(data);
      if (data.length === 0) {
        return res.status(404).json({
          message: req.t('no Permissions'),
        });
      }
      return res.status(200).json({
        data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        error: err.message,
      });
    });
};


const getPermission = (req, res) => {
  const { id } = req.params;
  Permission.findOne()
    .then((data) => {
      if (!data) {
        return res.status(400).json({
          message: req.t('Permission does not exit'),
        });
      }
      return res.status(200).json({
        data,
      });
    })
    .catch((err) =>
      res.status(400).json({
        error: 'Failled to lad data' || err.message,
      })
    );
};

const updatePermission = (req, res) => {
  const { id } = req.params;
  const { name, description,} = req.body;
  Permission.findOne()
  .then((data) => {
    if (!data) {
      return res.status(400).json({
        message: req.t(`inter correct id`),
      });
    }
    return data
      .update({
        name: name || data.name,
        description: description || data.description,
        
      })
      .then((updatePermission) => {
        res.status(200).json({
          message: req.t(`permission Updated`),
          updatePermission : {
            name: updatePermission .name,
            description: updatePermission .description,
            
            
          },
        });
      });
  });
};


const deletePermission = (req, res) => {
  const { id } = req.params;
  Permission.findOne()
  .then((data) => {
    if (!data) {
      return res.status(404).json({
        message: req.t(`Permission_exists`),
      });
    }
    return data.destroy().then(() => {
      res.status(200).json({
        message: req.t(`Data_deleted`),
      });
    });
  });
};
export { createPermission,allPermissions,getPermission,updatePermission,deletePermission}