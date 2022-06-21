import db from "../models";

export const createRole=async(req,res)=>{
  try {
    const role = req.body
 
    const newRole = await db.Roles.create(
      role
    );
    
    res.status(201).json({
      status: 'success',
      message: 'Role created successfully 👍🏾',
      data: newRole
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong try Again!!',
      stack: error.stack
    });
  }
};

export const getAllRoles = async (req, res) => {
  try {
    const roles = await Roles.findAll();
    res.status(201).json({
      status: 'success',
      result: roles.length,
      data: {
        roles: roles
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong!!',
      err: error.stack
    });
  }
};

export const getRole = async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const role = await Roles.findOne({
      where: { uuid }
    });
    res.status(200).json({
      status: 'success',
      data: {
        role
      }
    });
  } catch (error) {
    res.status(404).json({
      message: 'No role with that ID',
      Error: error.stack
    });
  }
};

export const updateRole = async (req, res) => {
  const uuid = req.params.uuid;
  const { roleName, permissions } = req.body;
  try {
    const role = await Roles.findOne({ where: { uuid } });

    role.roleName = roleName;
    role.permissions = permissions;
    await role.save();

    res.status(200).json({
      status: 'success',
      message: 'Role Updated Successfully',
      data: {
        role
      }
    });
  } catch (error) {
    res.status(404).json({
      message: 'No role with that ID',
      Error: error.stack
    });
  }
};

export const deleteRole = async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const role = await Roles.findOne({
      where: { uuid }
    });

    await role.destroy();

    res.status(200).json({
      status: 'success',
      message: 'Role Deleted Successfully'
    });
  } catch (error) {
    res.status(404).json({
      message: 'No role with that ID',
      Error: error.stack
    });
  }
};

