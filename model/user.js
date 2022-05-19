const conn = require('./../connection');

module.exports = {
    add: (param) => {
        const { firstname, lastname, address, postcode, contact, email, username, password } = param.body;

        conn.connect((err) => {
            // if (err) throw err;

            var query = `INSERT INTO users(firstname, lastname, address, postcode, contact, email, username, password, role)
                         VALUES(?,?,?,?,?,?,?,?,'user');`;
            // VALUES('${firstname}', '${lastname}', '${address}', ${postcode}, '${contact}', '${email}', '${username}', '${password}');`;
            conn.query(query, [firstname, lastname, address, postcode, contact, email, username, password], (err, res) => {
                if (err) throw err;
                console.log('data are successfully inserted!');
            });
        });
    },
    delete: (id) => {
        conn.connect((err) => {
            // if (err) throw err;

            var query = `DELETE FROM users WHERE id = ?;`;
            conn.query(query, [id], (err, res) => {
                if (err) throw err;
                console.log('data is successfully deleted!');
            });
        });
    },
    edit: (param) => {
        const { id } = param.params;
        const { firstname, lastname, address, postcode, contact, email, username, password } = param.body;

        conn.connect((err) => {
            // if (err) throw err;

            var query = `UPDATE users SET firstname=?, lastname=?, address=?, postcode=?, contact=?, email=?, username=?, password=?
                        WHERE id = ?`;
            conn.query(query, [firstname, lastname, address, postcode, contact, email, username, password, id], (err, res) => {
                if (err) throw err;
                console.log('data is successfully updated!');
            });
        });
    },
    get: (result) => {
        conn.connect((err) => {
            // if (err) throw err;

            conn.query(`SELECT * FROM users`, (err, res) => {
                if (err) throw err;
                console.log('users fetch successfully!');
                result(res);
            });
        });
    },
    getAccountAdmin: (user, pass, result) => {
        conn.connect((err) => {
            conn.query('SELECT * FROM users WHERE username=? AND password=? AND role="admin"', [user, pass], (err, res) => {
                if (res.length) console.log('retrive user successfully!');
                result(err, res);
            });
        });
    }
}