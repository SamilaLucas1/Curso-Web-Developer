CREATE DATABASE school;
DROP DATABASE school;

USE school;

CREATE TABLE studants(
	named VARCHAR(50) NOT NULL,
    age INT NOT NULL
);

DROP TABLE studants;

SELECT * FROM studants;
DESCRIBE studants;

INSERT INTO studants(named, age) VALUES("Samila", 18);
INSERT INTO studants VALUES('Emanuel', 30, DEFAULT);
INSERT INTO studants(age, named) VALUES(16, 'Murilo');

SET SQL_SAFE_UPDATES = 1;

UPDATE studants SET age = 30 WHERE named = 'Emanuel';
DELETE FROM studants WHERE named = 'Samila';
-- DELETE FROM studants;

TRUNCATE studants;

-- Aula2

ALTER TABLE studants ADD COLUMN city VARCHAR(20) NOT NULL;
ALTER TABLE studants ADD id VARCHAR(20) NOT NULL;
ALTER TABLE studants ADD id INT NOT NULL FIRST; -- colocar no comeco

ALTER TABLE studants DROP COLUMN id;
ALTER TABLE studants DROP COLUMN cpf;

ALTER TABLE studants ADD cpf VARCHAR(20) NOT NULL AFTER id;

ALTER TABLE studants RENAME TO estudants; -- mudar e alterar o nome ta tabela

ALTER TABLE studants 
CHANGE COLUMN id ID INT UNIQUE FIRST;

ALTER TABLE studants
CHANGE COLUMN named named VARCHAR(35) NOT NULL;

ALTER TABLE studants 
change city 
city varchar(20) not null default "Jucás";