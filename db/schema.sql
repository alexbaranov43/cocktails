CREATE DATABASE cocktails_db;

USE cocktails_db;

CREATE TABLE cocktails (
    id INT AUTO_INCREMENT NOT NULL,
    cocktail_name VARCHAR(30) NOT NULL,
    enjoyed BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);