const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "diet",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },

      name: {
        type: DataTypes.ENUM(
          "gluten free",
          "dairy free",
          "vegetarian",
          "lacto vegetarian",
          "ovo vegetarian",
          "lacto ovo vegetarian",
          "vegan",
          "paleolithic",
          "primal",
          "whole 30",
          "pescatarian",
          "ketogenic",
          "fodmap friendly",
          "low FODMAP"
        ),
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
