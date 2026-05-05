const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Skater = sequelize.define(
  'Skater',
  {
    name: DataTypes.STRING,
    country: DataTypes.STRING,
    gender: DataTypes.STRING,
  },
  {
    tableName: 'skater',
    timestamps: false,
  },
);

module.exports = Skater;
