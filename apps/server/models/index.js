const User = require('./User');
const Competition = require('./Competition');
const Skater = require('./Skater');
const Program = require('./Program');
const Score = require('./Score');

// зв’язки

// competition -> user (creator)
Competition.belongsTo(User, { foreignKey: 'created_by' });

// program -> skater, competition
Program.belongsTo(Skater, { foreignKey: 'skater_id' });
Program.belongsTo(Competition, { foreignKey: 'competition_id' });

// score -> user (judge), program
Score.belongsTo(User, { foreignKey: 'judge_id' });
Score.belongsTo(Program, { foreignKey: 'program_id' });

module.exports = {
  User,
  Competition,
  Skater,
  Program,
  Score,
};
