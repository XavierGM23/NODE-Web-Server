const http = require('http');

const server = http.createServer((req, res) => {
	res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
	res.writeHead(200, { 'Content-type': 'application/csv' });

	res.write('id, nombre\n');
	res.write('1, Fernando\n');
	res.write('2, Fernando\n');
	res.write('3, Fernando\n');

	console.log(req);

	res.end();
});

server.listen(3000);

console.log('Escuchando el puerto', 3000);
