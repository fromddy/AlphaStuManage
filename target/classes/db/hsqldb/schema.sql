DROP TABLE Owners IF EXISTS;

CREATE TABLE Owners (
  id         INTEGER IDENTITY PRIMARY KEY,
  name    VARCHAR(30),
  gender VARCHAR(8),
  birthday VARCHAR(10),
  address    VARCHAR(255),
  department VARCHAR(80),
  number  VARCHAR(20)
);
CREATE INDEX owner_name ON Owners(name);

