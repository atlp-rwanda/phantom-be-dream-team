import dotenv from 'dotenv';
import model from '../models';

const { Permissions } = model;

dotenv.config();

const createPermissions = async (req, res) => {
  // static create(req, res) {
  const { PermissionsName, PermissionsDescription } = req.body;
  try {
    await Permissions.create({
      PermissionsName,
      PermissionsDescription,
      });
    return res.status(201).send({message: 'Permissions created successfully'});
  }
  catch(e) {
    console.log(e);
    return res.status(500)
    .send(
      {message: 'Could not perform operation at this time, kindly try again later.'});}
      
}
const allPermissions = (req, res) => {
  return Permissions.findAll()

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


const getPermissions = (req, res) => {
  const { id } = req.params;
  Permissions.findOne()
    .then((data) => {
      if (!data) {
        return res.status(400).json({
          message: req.t('Permissions does not exit'),
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

const updatePermissions = (req, res) => {
  const { id } = req.params;
  const { PermissionsName, PermissionsDescription } = req.body;
  Permissions.findOne()
  .then((data) => {
    if (!data) {
      return res.status(400).json({
        message: req.t(`inter correct id`),
      });
    }
    return data
      .update({
        PermissionsName: PermissionsName || data.PermissionsName,
        PermissionsDescription: PermissionsDescription || data.PermissionsDescription,
      })
      .then((updatePermissions) => {
        res.status(200).json({
          message: req.t(`Role Updated`),
          updatePermissions : {
            PermissionsName: updatePermissions .PermissionsName,
            PermissionsDescription: updatePermissions .PermissionsDescription,
            
          },
        });
      });
  });
};


const deletePermissions = (req, res) => {
  const { id } = req.params;
  Permissions.findOne()
  .then((data) => {
    if (!data) {
      return res.status(404).json({
        message: req.t(`Permissions_exists`),
      });
    }
    return data.destroy().then(() => {
      res.status(200).json({
        message: req.t(`Data_deleted`),
      });
    });
  });
};
export { createPermissions,allPermissions,getPermissions,updatePermissions,deletePermissions}