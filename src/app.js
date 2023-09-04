import express from "express";
import bomberoRoutes from "./routes/bomberos.routes";
const cors = require('cors');


import path from "path";
import morgan from "morgan";

const app = express();


var corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

//configuracionde Middlewares

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));


app.use(bomberoRoutes);


//configuracion de los archivos estaticos.

app.use(express.static(path.join(__dirname, "public")));

export default app;


