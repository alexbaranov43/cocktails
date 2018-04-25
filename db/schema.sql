DROP DATABASE IF EXISTS cocktails_db;

CREATE DATABASE cocktails_db;


USE cocktails_db;

CREATE TABLE cocktails (
    id INT AUTO_INCREMENT NOT NULL,
    cocktail_name VARCHAR(30) NOT NULL,
    enjoyed BOOLEAN DEFAULT 0,
    PRIMARY KEY (id)
);

INSERT INTO cocktails (cocktail_name)
VALUES ("Sazerac"), ("Negroni"), ("Old Fashioned"), ("Moscow Mule");