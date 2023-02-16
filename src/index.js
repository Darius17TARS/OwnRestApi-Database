import app from './app'
import getConnection from "./database/connection"
app.listen( app.get("port"))

 
console.log("server on port", app.get("port"))