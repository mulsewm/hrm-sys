const { Pool } = require('pg');
const pool = require('../config/database');

const Company = {};

Company.create = async (company) => {
  const { name, address, email, phone } = company;
  const result = await pool.query(
    'INSERT INTO companies (name, address, email, phone) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, address, email, phone]
  );
  return result.rows[0];
};

Company.findAll = async () => {
  const result = await pool.query('SELECT * FROM companies');
  return result.rows;
};

Company.findById = async (id) => {
  const result = await pool.query('SELECT * FROM companies WHERE id = $1', [id]);
  return result.rows[0];
};

Company.update = async (id, company) => {
  const { name, address, email, phone } = company;
  const result = await pool.query(
    'UPDATE companies SET name = $1, address = $2, email = $3, phone = $4 WHERE id = $5 RETURNING *',
    [name, address, email, phone, id]
  );
  return result.rows[0];
};

Company.delete = async (id) => {
  const result = await pool.query('DELETE FROM companies WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = Company;
