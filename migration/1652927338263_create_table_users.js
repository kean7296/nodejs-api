module.exports = {
    "up": `CREATE TABLE users (
            id INT NOT NULL AUTO_INCREMENT,
            firstname VARCHAR(100) NOT NULL,
            lastname VARCHAR(100) NOT NULL,
            address VARCHAR(255),
            postcode INT,
            contact VARCHAR(100),
            email VARCHAR(100) NOT NULL,
            username VARCHAR(100) NOT NULL,
            password VARCHAR(255) NOT NULL,
            role VARCHAR(10) NOT NULL,
            PRIMARY KEY (id)
        );`,
    "down": ""
}