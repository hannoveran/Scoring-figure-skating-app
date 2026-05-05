const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Competition = sequelize.define(
  'Competition',
  {
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    location: DataTypes.STRING,
    created_by: DataTypes.INTEGER,

    category: DataTypes.STRING,
    segment: DataTypes.STRING,
    status: DataTypes.STRING,
  },
  {
    tableName: 'competition',
    timestamps: false,
  },
);

module.exports = Competition;
