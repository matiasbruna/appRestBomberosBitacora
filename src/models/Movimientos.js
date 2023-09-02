import { Schema, model } from "mongoose";

const movimientosSchema = new Schema(
  {
    cuartelero: {
      type: String,
      require: true,
      trim: true,
    },
    autorizo: {
      type: String,
      require: true,
      trim: true,
    },
    unidad: {
      type: Number,
      require: true,
    },
    chofer: {
        type: String,
        require: true,
        trim: true,
    },
    propocito: {
        type: String,
        require: true,
        trim: true,
    },
    km: {
        type: Number,
        require: false
      },
    fechaInicio: {
      type: Date,
      require: true,
    },
    fechaFinal: {
      type: Date,
      trim: true,
    },
    finalizo: {
        type: Boolean
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Movimientos", movimientosSchema);
