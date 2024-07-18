const candidateModel = require('../models/candidateModel');

const getAllCandidates = async (req, res) => {
  try {
    const candidates = await candidateModel.getCandidates();
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addCandidate = async (req, res) => {
  try {
    const candidate = await candidateModel.createCandidate(req.body);
    res.status(201).json(candidate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCandidate = async (req, res) => {
  try {
    const candidate = await candidateModel.updateCandidate(req.params.id, req.body);
    res.json(candidate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCandidate = async (req, res) => {
  try {
    await candidateModel.deleteCandidate(req.params.id);
    res.json({ message: 'Candidate deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllCandidates,
  addCandidate,
  updateCandidate,
  deleteCandidate,
};
