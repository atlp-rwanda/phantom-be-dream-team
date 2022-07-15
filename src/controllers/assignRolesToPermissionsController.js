import sendEmail from "../utils/Email";
import models from "../models"
const AssignRoleToPermission = async (req, res) => {
  try {
    const RoleId = req.params.RoleId;
    const PermissionId = req.params.PermissionId;

    const role= await models.Role.findOne({ where: { id: RoleId } });

   

    if (!role) {
      return res.status(404).josn({
        status: "fail",
        message: "No Role found with that ID",
      });
    } 
    
    const permission = await models.Permission.findOne({ where: { id: PermissionId } });

    if (!permission) {
      return res.status(404).json({
        status: "fail",
        message: "No permission found with that ID",
      });
    } else {
      models.RolesAndPermissions.create({
        RoleId: role.id,
        PermissionId: permission.id
      })
    }
    res.status(200).json({
      status: "success",
      message: "Role has been has benn assinged to the permission",
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: "Error",
      message: "Error while Assigning Role To The permission",
    });
  }
};

module.exports = {
    AssignRoleToPermission ,
};
