'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Digimon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Digimon.init({
    nombre: DataTypes.STRING,
    evoluciones: DataTypes.TEXT,
    nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Digimon',
  });
  return Digimon;
};