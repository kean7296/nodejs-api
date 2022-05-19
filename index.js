const express = require('express');
const user = require('./model/user.js');
const bodyParser = require('body-parser');
const app = express();
var session = require('express-session');
const PORT = 8080;

// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }))
    // app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/admin/login', (req, res) => {
    res.status(200).render('login');
});

app.post('/account-login', async(req, res) => {
    const { username, password } = req.body;

    await user.getAccountAdmin(username, password, (err, result) => {
        if (result.length) req.session.isLogin = true;

        res.status(200).send({
            message: result.length ? `successfully login` : 'invalid accounts',
        });
        // if (result.length) res.send(`<script>setTimeout(() => { window.location.href = 'http://localhost:${PORT}/admin/user/get' }, 3000)</script>`);
    });
    // if (req.session.isLogin) return res.redirect('/admin/user/get');
});

app.post('/admin/user/add', (req, res) => {
    // const { firstname, lastname, address, postcode, contact, email, username, password } = req.body;
    user.add(req);
    res.status(200).send({
        // message: result ? 'added data successfully!' : 'failed to add data!'
        message: 'added data successfully!'
    });
});

app.put('/admin/user/edit/:id', (req, res) => {
    if (!req.session.isLogin) return res.redirect('/admin/login');

    user.edit(req);
    res.status(200).send({
        // message: result ? 'update data successfully!' : 'failed to update data!'
        message: 'update data successfully!'
    });
});

app.delete('/admin/user/delete/:id', (req, res) => {
    if (!req.session.isLogin) return res.redirect('/admin/login');

    const { id } = req.params;
    user.delete(id);
    res.status(200).send({
        // message: result ? 'added data successfully!' : 'failed to delete data!'
        message: 'added data successfully!'
    });
});

app.delete('/admin/user/multiple-delete', (req, res) => {
    if (!req.session.isLogin) return res.redirect('/admin/login');

    const { ids } = req.body;
    console.log(ids);
    ids.map((val, key) => {
        // console.log(val);
        user.delete(val);
    });
    res.status(200).send({
        // message: result ? 'added data successfully!' : 'failed to delete data!'
        message: 'added data successfully!'
    });
});

app.get('/admin/user/get', (req, res) => {
    if (!req.session.isLogin) return res.redirect('/admin/login');

    user.get((result) => {
        res.status(200).send({
            // message: result ? 'added data successfully!' : 'failed to delete data!'
            message: result.length ? 'retrive user(s) successfully!' : 'empty user',
            data: result
        });
    })
});

app.listen(
    PORT,
    () => console.log(`it's alive at http://localhost:${PORT}/admin/login`)
);