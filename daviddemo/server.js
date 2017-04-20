'use strict';

const express = require('express');
const fs = require('fs'); //allows us to use JS to interact w/ command line
const pg = require('pg'); //allows postgress interaction


const app = express();
const PORT = process.env.PORT || 3000;
//setup the URL to the database that we watn to use
const connectionURL = 'postgres://USERNAME:PASSWORD@localhost:5432/day8_assignmentdb';

const client = new pg.Client(connectionURL);
client.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('./public'));

app.get('/new', function(request, response){
  response.sendFile('new.html', {root:'./public'});
});

app.get('/articles', function(request, response){
  client.query('SELECT * FROM articles;')
    .then(function(tableContents){
      .response.send(tableData.rows);
    });
    .catch(function(err){
      console.log(err);
    });
});

app.post('/articles', function(request, response){
  let title = request.body.title;
  let author = request.body.author;
  let authorUrl = request.body.authorUrl;
  let category = request.body.category;
  let publishedOn = request.body.publishedOn;
  let body = request.body.body;
  client.query(`INSERT INTO articles () VALUES ();`); //enter in values, SQL variables, ($1, $2, etc; `[id, title, author, etc]`);
});

app.listen(PORT, function(){
  console.log(`Our server is running on port ${PORT}`);
});
