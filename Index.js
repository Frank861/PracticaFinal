const express = require('express');
const hbs = requiere('express-handlebars');
const app = express();
const path = require('path');
 
const PORT = 4000;

app.set("view engine", ".hbs")

app.set('views'.path.join(__dirname, 'views'));
app.use((express.static (path.join(__dirname, "public"))));

app.engine(
    '.hbs',
hbs({
    defaultlayout: "main",
    layoutDir: path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partial'),
    extname: '.hbs'
}));

app.get('/', (req, res)=>{
    res.send('Inicio');
})

app.get('/nosotros', (req, res)=>{
    res.send('Nosotros');
})

app.get('/Servicio', (req, res)=>{
    res.send('Servicios');
})

app.get('/ServiciodeAutos', (req, res)=>{
    res.send('Servicios de Autos');
})

app.get('/ServiciodeRestaurante', (req, res)=>{
    res.send('Servicios de Restaurante');
})

app.get('/GaleriadeFotos', (req, res)=>{
    res.send('Galeria');
})

app.get('/contacto', (req, res)=>{
    res.send('Contacto');
})

app.get('/Video', (req, res)=>{
    res.send('Pagina de Video');
})

app.use((_req, res) =>{
    res.send('404')
})

app.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT}`);
    console.log(app.get('views'));
});