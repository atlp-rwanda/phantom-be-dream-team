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
export { createPermissions}