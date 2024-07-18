// config/database.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres', 
  host: 'localhost',
  database: 'hr_management',
  password: 'postgres', 
  port: 5432,
});

module.exports = pool;