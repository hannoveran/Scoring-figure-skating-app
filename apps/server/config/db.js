const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'scoring_figure_skating_db',
  'sa',
  'Rat5rat#rat',
  {
    host: 'localhost',
    dialect: 'mssql',
    dialectOptions: {
      options: {
        trustServerCertificate: true,
      },
    },
  },
);

module.exports = sequelize;
