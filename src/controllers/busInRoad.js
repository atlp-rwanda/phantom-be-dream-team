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

  const  SpecificBusinRoad = async (req,res) =>{
    const {id} = req.params;
    try{
      const bus = await busInRoad.findAll({
        where: {
          id:id
        },
       attributes: ['id','bus_Id','time_Start','speed','driver_Email','passangers','current_Loc','route_Id','Time_updated']
      });
    
      if (bus=='') {
        return res.status(400).send({
          message: `There is no bus in route `+id
        });
      }
      else{
        return res.status(200).send(bus)
      }
    }catch(err){
      return res.status(500).send({
        message: `Error:${err.message}`
      });
    }

  }

  const  getAllBusInRoad =  async (req, res) => {
    const {id} = req.params;

    
    try{
    const buses = await busInRoad.findAll({
     attributes: ['id','bus_Id','time_Start','speed','driver_Email','passangers','current_Loc','route_Id','Time_updated']
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
    const {bus_Id,time_Start,speed,driver_Email,passangers,current_Loc,route_Id,id}=req.body;
    const Time_updated=0;
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

    const { speed, passangers, current_Loc, Time_updated } = req.body;
    const { id } = req.params;
  
    try {
        const buses = await busInRoad.findOne({
            where: {
              id:id
            },attributes: ['id','bus_Id','time_Start','speed','driver_Email','passangers','current_Loc','route_Id']
          });
          if (buses=='') {
                  return res.status(400).send({
                    message: `There is no ongoing  bus with this `+id
                  });
                }else{
                  buses.speed = speed,
                  buses.passangers = passangers,
                  buses.current_Loc = current_Loc
                  buses.Time_updated = Time_updated
                  buses.save();
                  return res.status(200).send({
                    message: `Bus info updated`+id
                  });
                }   } catch (err) {
                  return res.status(500).send({
                    message: `Error: ${err.message}`,
                  });
                }
            
            }
  export { startBus, getBusInRoad, SpecificBusinRoad, getAllBusInRoad, UpdateBusInfo, stopBus};