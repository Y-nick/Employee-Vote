const { query } = require('./db.js');

const getIdeas = () => {
  const text = 'SELECT * FROM ideas';
  return query(text);
};

const postIdea = (valObj) => {
  const { idea, sub, author, department, department_id } = valObj;
  const text = 'INSERT INTO ideas(id, idea, sub, author, department, department_id) VALUES((SELECT max(id)+1 FROM ideas), $1, $2, $3, $4, $5)';
  const values = [idea, sub, author, department, department_id];
  return query(text, values);
};

module.exports = {
  getIdeas,
  postIdea,
};
