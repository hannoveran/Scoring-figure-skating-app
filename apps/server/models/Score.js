const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Score = sequelize.define(
  'Score',
  {
    judge_id: DataTypes.INTEGER,
    program_id: DataTypes.INTEGER,
    technical_score: DataTypes.DECIMAL,
    components_score: DataTypes.DECIMAL,
    deductions: DataTypes.DECIMAL,
  },
  {
    tableName: 'score',
    timestamps: false,
  },
);

module.exports = Score;
