import express from 'express'
import config from './config'
import productsRoutes from "./routes/product.routes"

const app = express()



//setings .. Configuracion de puerto
app.set("port", config.port)
app.use(function(req, res, next) { //SUPERHYPERIMPORTANTE
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });
//middlewars

app.use(express.json())
app.use(express.urlencoded({extended: false}))
//app.get("/", function (req, res) {
  //  res.sendFile("C:/Users/dariu/Desktop/Testeo/frontend/index.html");
  //});
app.use(productsRoutes)

export default app