module.exports = {
    "up": `INSERT INTO users(firstname, lastname, address, postcode, contact, email, username, password, role)
           VALUES('Kenneth', 'Andales', 'Purok 7, Brgy. Lagundi, Allen, Northern Samar', 6405, '+639072363667', 'keanolida7296@gmail.com', 'ken', 'admin123', 'admin');`,
    "down": ""
}