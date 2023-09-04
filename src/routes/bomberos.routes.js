//Rutas de Modulo Bomberos

import { Router } from "express";
const router = Router();
import { 
  mostrarBomberos, 
} from "../controllers/bomberos.constroller";

router.get("/bomberos", mostrarBomberos);



export default router;