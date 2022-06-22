require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'yanick',
  password: '6996',
  host: 'localhost',
  database: 'ideadb',
  port: 5432,
});

pool.connect();

module.exports = {
  query: (text, params) => pool.query(text, params),
};
