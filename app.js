import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config()

import monsterData from './monsters.json' assert { type:'json'};

const PORT = 6133

import path from 'path'
import { fileURLToPath } from 'url'
import * as prismicH from '@prismicio/helpers'
import { client } from './config/prismicConfig.js'

const app = express(); 

// Add a middleware function that runs on every route. It will inject 
// the prismic context to the locals so that we can access these in 
// our templates.
app.use((req, res, next) => {
  res.locals.ctx = {
    prismicH,
  }
  next()
})





app.set('view engine', 'ejs'); 

app.use(express.static('public'));



//Page route

app.get('/', function(request, response) {
	response.render('home');
});




app.get('/monsters', function(request, response) {
	response.render("monsters", {monsters: monsterData});
});

app.get('/detail/:id', function(request, response) {
	const monster = monsterData.find(function(monster){
		return monster.id === request.params.id; 
	
	})

	response.render('detail', {monster: monster});
});

app.get('/product', async function(request, response) {
  	const product = await client.getAllByType('product');
  	response.render('product', { product });
})

// app.get('/product/:uid', async function(request, response) {
// 	const product 
// })

// if there is not page route
app.use(function(request, response){
	response.status(404).render('404', {query: request.url});
})

app.listen(process.env.PORT || 6133, function () {
	console.log("server started at localhost(1988)")
})


