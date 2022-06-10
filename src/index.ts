import { AppDataSource } from "./data-source"
import { Route } from "./entity/Route"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new Route into the database...")
    const route = new Route()
    route.routeNo = 602
    route.from = "Nyabugogo"
    route.to = "Kimironko"
    route.No_Of_Stations = 602
    route.stations = ["Nyabugogo","Kanogo","Sonatube"]
    route.price = 250
    await AppDataSource.manager.save(route)
    console.log("Saved a new route with id: " + route.id)

    console.log("Loading routess from the database...")
    const routes = await AppDataSource.manager.find(Route)
    console.log("Loaded routes: ", routes)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
