// creando y leyendo una pagina en node sin express
/* const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const read = fs.createReadStream('./static/index.html', 'utf-8');
    read.pipe(res);
})

server.listen(3600);
console.log('Server on port 3600') */

// con express
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ejs = require('ejs');
const connectDB = require('./db');

connectDB();

const app = express();
const port = 3600;

const homeRoutes = require('./routes/routers');
const usersRoutes = require('./routes/users');

// configuracion
app.set('appName', 'Express Course');
app.set('case sensitive routing', true);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(express.json());

app.use(homeRoutes);
app.use(usersRoutes);
/* app.use((req, res, next) => {
    console.log(`Ruta: ${req.url} y su metodo es: ${req.method}`);
    next();
}) */


// Routes
app.use("/public", express.static(path.join(__dirname, '/public')));
app.use("/uploads", express.static(path.join(__dirname, '/uploads')));




app.listen(port);
console.log(`Server ${app.get('appName')} on port ${port}`);