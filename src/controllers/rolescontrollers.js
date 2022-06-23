import dotenv from 'dotenv';
import model from '../models';

const { Roles } = model;

dotenv.config();

const createRole = async (req, res) => {
  // static create(req, res) {
  const { roleName, roleDescription } = req.body;
  try {
    await Roles.create({
      roleName,
      roleDescription,
      });
    return res.status(201).send({message: 'Role created successfully'});
  }
  catch(e) {
    console.log(e);
    return res.status(500)
    .send(
      {message: 'Could not perform operation at this time, kindly try again later.'});}
      
}
const allRoles = (req, res) => {
  return Roles.findAll()

    .then((data) => {
      console.log(data);
      if (data.length === 0) {
        return res.status(404).json({
          message: req.t('no role'),
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


const getRole = (req, res) => {
  const { id } = req.params;
  Roles.findOne()
    .then((data) => {
      if (!data) {
        return res.status(400).json({
          message: req.t('role does not exit'),
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

const updateRole = (req, res) => {
  const { id } = req.params;
  const { roleName, roleDescription } = req.body;
  Roles.findOne()
  .then((data) => {
    if (!data) {
      return res.status(400).json({
        message: req.t(`inter correct id`),
      });
    }
    return data
      .update({
        roleName: roleName || data.roleName,
        roleDescription: roleDescription || data.roleDescription,
      })
      .then((updateRole) => {
        res.status(200).json({
          message: req.t(`Role Updated`),
          updateRole : {
            roleName: updateRole .roleName,
            roleDescription: updateRole .roleDescription,
            
          },
        });
      });
  });
};

const deleteRole = (req, res) => {
  const { id } = req.params;
  Roles.findOne()
  .then((data) => {
    if (!data) {
      return res.status(404).json({
        message: req.t(`Role_exists`),
      });
    }
    return data.destroy().then(() => {
      res.status(200).json({
        message: req.t(`Data_deleted`),
      });
    });
  });
};

export { createRole,allRoles,getRole,updateRole,deleteRole}