const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Program = sequelize.define(
  'Program',
  {
    skater_id: DataTypes.INTEGER,
    competition_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
  },
  {
    tableName: 'program',
    timestamps: false,
  },
);

module.exports = Program;
