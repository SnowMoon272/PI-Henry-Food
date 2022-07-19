const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      //name
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // Resumen
      summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      healthScore: {
        type: DataTypes.REAL,
      },

      analyzedInstructions: {
        type: DataTypes.TEXT,
      },

      image: {
        type: DataTypes.STRING,
      },

      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
