const express =require('express');
const hbs = require('express-handlebars');
const path = require ('path');
const nodemailer = require ('nodemailer'); 
require('dotenv').config();
const PORT = 4000;
const app = express();
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER, // generated ethereal user
      pass: process.env.MAIL_PASS, // generated ethereal password
    },
  });
  transporter.verify().then(()=>{
    console.log("Listo para enviar correo!");
});

app.set("view engine", ".hbs")

app.set('views', path.join(__dirname, 'views'));
app.use((express.static (path.join(__dirname, "public"))));

app.engine(
    '.hbs',
hbs({
    defaultlayout: "main",
    layoutsDir: path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partial'),
    extname: '.hbs'
}));

app.get('/', (req, res)=>{
    res.render('Index', {Ruta:'css/style.css'});
})

app.get('/Nosotros', (req, res)=>{
    res.render('Nosotros', {Ruta:'css/Nosotros.css'});
})

app.get('/Servicios', (req, res)=>{
    res.render('Servicios', {Ruta:'css/Servicios.css'});
})

app.get('/ServiciosAutos', (req, res)=>{
    res.render('ServiciosAutos', {Ruta:'css/ServiciosAutos.css'});
})

app.get('/ServicioRestaurante', (req, res)=>{
    res.render('ServiciosRestaurante', {Ruta:'css/ServiciosRestaurante.css'});
})

app.get('/Galeriadefotos', (req, res)=>{
    res.render('Galeriadefotos', {Ruta:'css/Galeriadefotos.css'});
})

app.get('/Contacto', (req, res)=>{
    res.render('Contacto', {Ruta:'css/Contacto.css'});
})

app.get('/Video', (req, res)=>{
    res.render('Video', {Ruta:'css/Video.css'});
})

app.use((_req, res) =>{
    res.render('Personas', {Ruta:'css/Personas.css'})
})

app.listen(PORT, ()=>{
    console.log(`Server on http://localhost:${PORT}`);
    console.log(app.get('views'));
});

//Formulario
app. post ('/Contacto', async(req, res)=>{
    // send mail with defined transport object
   await transporter.sendMail({
   from: process.env.MAIL_USER, // sender address
   to:process.env.MAIL_USER, // list of receivers
   subject: `${req.body.nombre} Solicita su atencion sobre ${req.body.Asunto}`, // Subject line
   html: `<h1>Nombre:${req.body.nombre}</h1>
       <h1>Correo:${req.body.email}</h1>
       <h1>Telefono:${req.body.telefono}</h1>
       <h1>Solicita la siguiente información:</h1>
   <h1>${req.body.mensaje}</h1>` // html body
 });
   res.redirect('/');
})
