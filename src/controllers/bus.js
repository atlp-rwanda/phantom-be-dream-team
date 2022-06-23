import module from "module";
import model from "../models/bus";

const { Bus } = model

class Buses {
    static create (req, res) {

        const { plate, busType, seat } = req.body    
        if (plate === '' || busType === '' || seat === '') {
          return res.status(400).send({
            message: "All field required"
          })
        }
        if (!/^[R]*[A-Z]{2}[0-9]{3}[A-Z]{1}$/.test(plate)) {
          return res.status(400).send({
            message: "Enter valid plate number"
          })
        }
        if (!/^[A-Za-z]+$/.test(busType)) {
          return res.status(400).send({
            message: "enter valid bus category"
          })
        }
        if (!/^[0-9]*$/.test(seat)) {
          return res.status(400).send({
            message: "seats must be number"
          })
        }
        return Bus.create({
          plate,
          busType,
          seat
        })
          .then((bus) =>
            res.status(201).send({
              message: "Bus successfully created",
              bus
            })
          )
          .catch((error) => {
            res.status(400).send(error)
          })   
    }
// list all buses
static listAll (req, res) {
  return Bus.findAll()
    .then((listbus) => {
      if (listbus.length === 0) {
        res.status(200).send({
          data: listbus,
          message: "No record found"
        })
      } else {
        res.status(200).send(listbus)
      }
    })
    .catch((error) => res.status(400).send(error))
}
}

export default Buses