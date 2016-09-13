'use strict'
const express = require('express');
const app = express();

app.get('/api/whoami', function(request, response) {

	const ipaddress = request.get('X-Forwaded-For') || request.connection.remoteAddress;
	const language = request.get('Accept-Language').split(',')[0];
	const userAgent = request.get('User-Agent').split(' ');
	const software = userAgent[1].slice('1') + ' ' + userAgent[2] + ' ' + userAgent [3].slice(0, -1);


	const clientSpecs = {
		ipaddress: ipaddress,
		language: language,
		software: software
	};

	// send the specs
	response.send(JSON.stringify(clientSpecs));


});


app.listen(3000);
