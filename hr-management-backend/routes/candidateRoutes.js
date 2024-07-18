const express = require('express');
const candidateController = require('../controllers/candidateController');

const router = express.Router();

router.get('/', candidateController.getAllCandidates);
router.post('/', candidateController.addCandidate);
router.put('/:id', candidateController.updateCandidate);
router.delete('/:id', candidateController.deleteCandidate);

module.exports = router;
