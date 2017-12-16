DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT 0, 
    date_created TIMESTAMP DEFAULT '0000-00-00 00:00:00', 
    date_updated TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    PRIMARY KEY (id)
);