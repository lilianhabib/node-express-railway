import express from 'express';

const app = express(); 

const PORT = 1988

app.get('/', function(request, response) {
	response.send('<h1>Home page</h1>');
})



app.listen(1988, function () {
	console.log("server started at localhost(1988)")
})