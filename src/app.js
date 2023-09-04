import express from "express";
import bomberoRoutes from "./routes/bomberos.routes";



import path from "path";
import morgan from "morgan";

const app = express();



//configuracionde Middlewares

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));


app.use(bomberoRoutes);


//configuracion de los archivos estaticos.

app.use(express.static(path.join(__dirname, "public")));

export default app;


