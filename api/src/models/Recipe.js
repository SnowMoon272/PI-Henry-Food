const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
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
        type: DataTypes.INTEGER,
      },

      analyzedInstructions: {
        type: DataTypes.TEXT,
      },

      image: {
        type: DataTypes.STRING,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
