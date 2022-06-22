CREATE DATABASE ideadb;

DROP TABLE IF EXISTS ideas;

CREATE TABLE
ideas(
  id SERIAL PRIMARY KEY,
  idea VARCHAR(5000),
  sub VARCHAR(300),
  author VARCHAR(180),
  department VARCHAR(100),
  department_id INT,
  feedback VARCHAR(1800),
  votes INT
);

/* IN FUTURE DEPARTMENT SHOULD LINK TO A DIFFERENT TABLE
DEPATMENT WILL HAVE DPT LEAD, ACTION OFFICER, POC, ETC.