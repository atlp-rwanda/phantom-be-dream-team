import module from "module";
import model from "../models";

const { Bus } = model

class Buses {
  static create(req, res) {

    const { plate, busType, seat } = req.body
    if (plate === '' || busType === '' || seat === '') {
      return res.status(400).send({
        status:"fail",
        message: req.t('required_field'),

      })
    }
    if (!/^[R]*[A-Z]{2}[0-9]{3}[A-Z]{1}$/.test(plate)) {
      return res.status(400).send({
        message: req.t('Plate_number_required'),
      })
    }
    if (!/^[A-Za-z]+$/.test(busType)) {
      return res.status(400).send({
        status:"fail",
        message: req.t('busType_required'),
      })
    }
    if (!/^[0-9]*$/.test(seat)) {
      return res.status(400).send({
        status:"fail",
        message: req.t("seats_require"),
      })
    }
    return Bus.create({
      plate,
      busType,
      seat
    })
      .then((bus) =>
        res.status(200).send({
          status:"success",
          message: req.t("bus_created"),
          bus
        })
      )
      .catch((error) => {
        res.status(400).send(error)
      })
  }
  // list all buses
  static listAll(req, res) {
    return Bus.findAll()
      .then((listbus) => {
        if (listbus.length === 0) {
          res.status(200).send({
            data: listbus,
            status:"success",
            message: req.t("all_buses_found")
          })
        } else {
          res.status(200).send(listbus)
        }
      })
      .catch((error) => res.status(400).send(error))
  }

  // list Bus by Id
  static findbus(req, res) {
    const id = req.params.id

    return Bus.findOne({
      where: {
        id: id
      },
      raw: true,


    })
      .then((busObject) => {
        if (!busObject) {
          res.status(400).json({
            status:"success",
            message: req.t("bus_found")
          })
        } else {
          res.status(200).json({
            busObject
          })
        }
      })
      .catch((error) => {
        res.status(400).json({ status: 400, error })
      })

  }

  // update

   static modify (req, res) {

    const { plate, busType, seat } = req.body
    if (plate === '' || busType === '' || seat === '') {
      return res.status(400).send({
        message: "fill all the field"
      })
    }
    if (!/^[R]*[A-Z]{2}[0-9]{3}[A-Z]{1}$/.test(plate)) {
      return res.status(400).send({
        status:"fail",
        message: "fill the plate number"
      })
    }
    if (!/^[A-Za-z]+$/.test(busType)) {
      return res.status(400).send({
        status:"fail",
        message: "fill the busType"
      })
    }
    if (!/^[0-9]*$/.test(seat)) {
      return res.status(400).send({
        status:"fail",
        message: "fill the seat"
      })
    }
    return Bus.findByPk(req.params.id)
      .then((bus) => {
        bus
          .update({
            plate: plate || bus.plate,
            busType: busType || bus.busType,
            seat: seat || bus.seat,
          })
          .then((updatedBus) => {
            res.status(200).send({
              status:"success",
              message: "bus updated",
              data: {
                plate: plate || updatedBus.plate,
                busType: busType || updatedBus.busType,
                seat: seat || updatedBus.seat,
              }
            })
          })
          .catch((error) => {
            res.status(400).send({
              status:"fail",
              message: error.message
            })
          })
      })

      .catch((error) => {
        res.status(400).send({
          status:"fail",
          message: "bus not found"
        })
      })
  }

  // delete

  static delete (req, res) {
    return Bus.findByPk(req.params.id)
      .then((bus) => {
        if (!bus) {
          return res.status(400).send({
            status:"fail",
            message: "Bus id not found"
          })
        }
        return bus.destroy().then(() =>
          res.status(200).send({
            status:"success",
            message: "Bus deleted"
          })
        )
      })
      .catch((error) => res.status(400).send(error))
  }

}

export default Buses