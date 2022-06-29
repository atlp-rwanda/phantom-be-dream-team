import dotenv from 'dotenv';
import model from '../models';
import { Sequelize } from 'sequelize';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';


const busInRoad = model.busInRoad;
dotenv.config();

const  getBusInRoad =  async (req, res) => {
    const {id} = req.params;

    
    try{
    const buses = await busInRoad.findAll({
      where: {
        route_Id:id
      },attributes: ['id','bus_Id','time_Start','speed','driver_Email','passangers','current_Loc','route_Id','Time_updated']
    });
  
    if (buses=='') {
      return res.status(400).send({
        message: `There is no bus in route `+id
      });
    }
  
    return res.send(buses);
  }catch(err){
    return res.status(500).send({
      message: `Error:${err.message}`
    });
  }
  };

  const startBus =async (req, res) =>{
    const {bus_Id,time_Start,speed,driver_Email,passangers,current_Loc,route_Id}=req.body;
    const Time_updated=0,id=Math.round(Math.random()*100000);
    if (bus_Id === '' || time_Start === '' || speed === '' || driver_Email === '' || route_Id==='') {
      return res.status(500).json({
        message: req.t('required_field'),
      });
    }
    else{

try{
  busInRoad.create({
    id,
    bus_Id,
    time_Start,
    speed,
    driver_Email,
    passangers,
    current_Loc,
    route_Id,
    Time_updated
  });
  return res.status(201).send({
    message: `Bus `+bus_Id+ ' starts'
  });
}catch(err){
  res.status(500).send({
    message: err.message
  });
} }
  }
  
  const stopBus = async (req, res) =>{
    const { id } = req.params;
    busInRoad.findOne({
      where: {
        id,
      },
    }).then((busInRoad) => {
      if (!busInRoad) {
        return res.status(404).json({
          message: "there is no ongoing bus of this id "+id+" !"
        });
      }
      return busInRoad.destroy().then(() => {
        res.status(200).json({
          message: "Bus is stopped"
        });
      });
    });
  }

  const UpdateBusInfo = async (req, res) =>{
    var logged=false
    const token = req.header('auth-token');
    if(!token) return res.status(401).send({
      message: req.t('AccessDenied')
    });

    try{
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      req.user = verified; 
      logged=true
    }catch(err){
        res.status(401).send({
          message: req.t('WrongToken')
        });
    }
    if(logged==true){
        const { speed, passangers, current_Loc} = req.body;
        const { id } = req.params;
    try {
        const buses = await busInRoad.findAll({
            where: {
              id:id
            },attributes: ['bus_Id','time_Start','speed','driver_Email','passangers','current_Loc','route_Id']
          });
          if (buses=='') {
                  return res.status(400).send({
                    message: `There is no ongoing  bus with this `+id
                  });
                }
      
      if (speed) {
        busInRoad.speed = speed;
      }
      if (passangers) {
        busInRoad.passangers = passangers;
      }
      if (current_Loc) {
        busInRoad.email = current_Loc;
        }
        busInRoad.save();
      return res.status(200).send({
        message: `Bus info updated`+id
      });
    } catch (err) {
      return res.status(500).send({
        message: `Error: ${err.message}`,
      });
    }
  }};

  export { startBus, getBusInRoad, UpdateBusInfo, stopBus};