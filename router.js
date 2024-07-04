import { Router } from "express";

const router = Router();

// dados
const login = "admin";
const password = "1234";


// index
router.get('/', (req, res) => {
    if (req.session.login) {
        res.render('logado', { 'login': login });
    } else {
        res.render('index');
    }
});

// login
router.post('/login', (req, res) => {
    if (req.body.login == login && req.body.password == password) {
        req.session.login = true;
        res.render('logado', { 'login': login });
    } else {
        res.redirect('/');
    }
});

export default router;