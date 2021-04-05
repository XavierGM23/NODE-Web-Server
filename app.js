const express = require('express');
const app = express();
const hbs = require('hbs');
require('dotenv').config();

const port = process.env.PORT;

console.log(process.env);
// HANDLEBARS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err) {});

// Servir contenido estatico
// app.use(express.static('templated-roadtrip'));
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('home', {
		nombre: 'Xavier',
		titulo: 'Curso de node'
	});
});

app.get('/generic', (req, res) => {
	res.render('generic', {
		nombre: 'Generic',
		titulo: 'Section > '
	});
});

app.get('/elements', (req, res) => {
	res.render('elements', {
		nombre: 'Elements',
		titulo: 'Section > '
	});
});

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});

// app.get('/', (req, res) => {
// 	res.sendFile(__dirname + '/templated-roadtrip/index.html');
// });

// app.get('/generic', (req, res) => {
// 	res.sendFile(__dirname + '/templated-roadtrip/generic.html');
// });

// app.get('/elements', (req, res) => {
// 	res.sendFile(__dirname + '/templated-roadtrip/elements.html');
// });

// app.get('*', (req, res) => {
// 	res.sendFile(__dirname + '/templated-roadtrip/404.html');
// });
