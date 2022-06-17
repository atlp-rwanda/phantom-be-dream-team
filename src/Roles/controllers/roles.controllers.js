
import { Roles } from '../../models/roles';

const createRole = async (req, res) => {
  try {
    const { roleName, permissions } = req.body;

    console.log(roleName, permissions);
    const newRole = await Roles.create({
      roleName,
      permissions
    });

    console.log(newRole);
    res.status(201).json({
      status: 'success',
      message: 'Role created successfully 👍🏾',
      data: {
        role: newRole
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      message: 'Something went wrong try Again!!',
      err: error
    });
  }
};

const getAllRoles = async (req, res) => {
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

const getRole = async (req, res) => {
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

const updateRole = async (req, res) => {
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

const deleteRole = async (req, res) => {
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

export { createRole, getAllRoles, getRole, updateRole, deleteRole };