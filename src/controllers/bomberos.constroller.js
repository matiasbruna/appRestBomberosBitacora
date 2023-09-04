import  {errors , reiniciarErrors } from "../models/Errors";
import grados from '../models/Grados'
import Bomberos from "../models/Bomberos";
import {User, Admin} from "../models/auth";


export const getGradosBomberos =  async (req, res) => {
  res.send(grados)
};

export const mostrarBomberos =  async (req, res) => {
 

  const TodosBomberos = await Bomberos.find().sort({nOrden:1}).lean();
  res.send(TodosBomberos);
  console.log('deberian imprimir todos los bomberos.')
};

export const getBomberoId = async (req, res) => {
  reiniciarErrors();
  try {
    const bombero = await Bomberos.findById(req.params._id).lean();
    res.send(bombero);
  } catch (error) {
    console.log(error)
  }
};