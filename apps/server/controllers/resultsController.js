const { Score, Program, Skater, Competition } = require('../models');

// SELECT results (JOIN)
exports.getResults = async (req, res) => {
  try {
    const data = await Score.findAll({
      include: [
        {
          model: Program,
          include: [Skater, Competition],
        },
      ],
    });

    res.json(data);
  } catch (err) {
    res.status(500).json(err);
  }
};
