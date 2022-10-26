// Routes
const express = require('express');
const router = express.Router();
const axios = require('axios');

// APP.USE
/* app.use((req, res, next) => {
    if(req.query.login !== 'dvcode@correo.com'){
        return res.send('user not authenticated');
    }

    next();
}) */

router.get('/', (req, res) => {
    const title = 'Inicio';
    const header = 'Pagina con EJS';
    let isActive = true;
    let users = [
        {
            id: 1,
            name: 'Ryan',
            age: 21
        },
        {
            id: 2,
            name: 'Daniel',
            age: 28
        },
        {
            id: 3,
            name: 'Ramon',
            age: 35
        },
        {
            id: 4,
            name: 'Enmanuel',
            age: 40
        },
        {
            id: 5,
            name: 'Gabriel',
            age: 62
        }
    ]

    res.render('index', {title, header, isActive, users});
});

router.get('/about', (req, res) => {
    const title = 'Acerca de';
    const header = 'about';
    res.render('about', {title, header});
});

router.get('/posts', async (req, res) => {
    const title = 'Probando datos';
    const header = 'posts';
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    res.render('posts', {title, header, posts: response.data});
});

router.get('/dashboard', (req, res) => {
    const title = 'Dashboard page';
    const header = 'dashboard';
    res.render('dashboard', {title, header});
});


// metodo all
/* app.all('/info', (req, res) => {
    res.send('SERVER INFO')
}) */

// REQ.QUERY Y REQ.PARAMS
/* app.get('/hello/:user', (req, res) => {
    console.log(req.query);
    const user = req.params.user;

    if(req.query.edad >= 20){
        return res.send(`Hello ${user.toUpperCase()}, Eres mayor de edad, Welcome!`);
    }

    res.send(`Hello ${user.toUpperCase()}, eres menor de edad`);
})

app.get('/add/n1=:x/n2=:y', (req, res) => {
    const result = Number(req.params.x) + Number(req.params.y);
    console.log(req.params.x);
    console.log(req.params.y);
    res.send(`Result: ${result}`);
}) */

// REQUEST.BODY
/* app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send('NUEVO USUARIO CREADO');
}) */

// app.use((req, res) =>{
//     res.status(404).send('No encontramos la pagina');
// })

module.exports = router;