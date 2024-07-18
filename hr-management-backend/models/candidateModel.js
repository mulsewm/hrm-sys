const pool = require('../config/database');

const getCandidates = async () => {
  const result = await pool.query('SELECT * FROM candidates');
  return result.rows;
};

const createCandidate = async (candidate) => {
  const { name, email, phone } = candidate;
  const result = await pool.query(
    'INSERT INTO candidates (name, email, phone) VALUES ($1, $2, $3) RETURNING *',
    [name, email, phone]
  );
  return result.rows[0];
};

const updateCandidate = async (id, candidate) => {
  const { name, email, phone } = candidate;
  const result = await pool.query(
    'UPDATE candidates SET name = $1, email = $2, phone = $3 WHERE id = $4 RETURNING *',
    [name, email, phone, id]
  );
  return result.rows[0];
};

const deleteCandidate = async (id) => {
  await pool.query('DELETE FROM candidates WHERE id = $1', [id]);
};

module.exports = {
  getCandidates,
  createCandidate,
  updateCandidate,
  deleteCandidate,
};
