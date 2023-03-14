import express from 'express';

import monsterData from './monsters.json' assert { type:'json'};

const app = express(); 

const PORT = 1988

app.set('view engine', 'ejs'); // why do we need this?

app.use(express.static('views'));
app.use(express.static('css'));

//Page route

app.get('/', function(request, response) {
	response.render('home');
});

app.get('/monsters', function(request, response) {
	response.render("monsters", {monsters: monsterData});
});

app.get('/detail', function(request, response) {
	response.render('detail');
});



// if there is not page route
app.use(function(request, response){
	response.status(404).render('404', {query: request.url});
})

app.listen(1988, function () {
	console.log("server started at localhost(1988)")
})

