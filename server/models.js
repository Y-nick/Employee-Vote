const { query } = require('./db.js');

const getIdeas = () => {
  const text = '';
  return query(text);
};

module.exports = {
  getIdeas,
};
