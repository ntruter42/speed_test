CREATE SCHEMA speed;

CREATE TABLE speed.users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	age INT NOT NULL
);

INSERT INTO speed.users
	(name, age)
VALUES
	('John Doe', 30),
	('Jane Doe', 25),
	('Peter Smith', 40),
	('Mary Johnson', 35),
	('David Williams', 20),
	('Sarah Brown', 22),
	('Michael Green', 32),
	('Jennifer White', 28),
	('William Black', 45),
	('Elizabeth Blue', 37);