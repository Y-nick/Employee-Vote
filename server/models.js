const { query } = require('./db.js');

const getIdeas = () => {
  const text = 'SELECT * FROM ideas';
  return query(text);
};

module.exports = {
  getIdeas,
};
