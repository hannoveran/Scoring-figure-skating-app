const express = require('express');
const router = express.Router();

const controller = require('../controllers/competitionController');

router.post('/', controller.createCompetition);
router.get('/', controller.getCompetitions);
router.get('/:id', controller.getCompetitionById);
router.put('/:id', controller.updateCompetition);
router.delete('/:id', controller.deleteCompetition);

module.exports = router;
