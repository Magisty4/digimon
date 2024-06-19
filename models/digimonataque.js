'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DigimonAtaque extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DigimonAtaque.init({
    DigimonId: DataTypes.INTEGER,
    AtaqueId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DigimonAtaque',
  });
  return DigimonAtaque;
};