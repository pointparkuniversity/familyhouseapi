const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
//const db = require('../db/database');

// parse application/json
app.use(bodyParser.json());

//create database connection
const conn = mysql.createConnection({
  host:'yourname.it.pointpark.edu',
  user:'root',
  password: 'yourpassword',
  database: 'yourdatabase'
});


//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

//FAQ//////
//List all FAQs
app.get('/api/v1/faq',(req, res) => {
  let sql = "SELECT * FROM faq";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//FAQ by Id
app.get('/api/v1/faq/:faqid',(req, res) => {
  let sql = "SELECT * FROM faq WHERE faqid="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Edit FAQ
app.put('/api/v1/faq/:faqid',(req, res) => {
  let sql = "UPDATE faq SET Question='"+req.body.Question+"', Category='"+req.body.Category+"', Answer='"+req.body.Answer+"' WHERE faqid="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//LINENS//////
//List all Linens
app.get('/api/v1/linens',(req, res) => {
  let sql = "SELECT * FROM linens";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Linen Id
app.get('/api/v1/linens/:linenid',(req, res) => {
  let sql = "SELECT * FROM linens WHERE linenid = "+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Post Linens
app.post('/api/v1/linens/',(req, res) => {
  let data = {HouseName: req.body.HouseName, RoomNumber: req.body.RoomNumber, Guests: req.body.Guests, LinenType: req.body.LinenType};
  let sql = "INSERT INTO linens SET ?";
  //let newdata = {product_name: 'apples', product_price: 233};
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    console.log(err);
  });
});

//EVENTS//////
//List all events
app.get('/api/v1/events',(req, res) => {
  let sql = "SELECT * FROM events";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Events Id
app.get('/api/v1/events/:eventid',(req, res) => {
  let sql = "SELECT * FROM events WHERE eventid = "+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

//Post Events
app.post('/api/v1/events/',(req, res) => {
  let data = {DateCategory: req.body.DateCategory, Location: req.body.Location, Message: req.body.Message};
  let sql = "INSERT INTO events SET ?";
  //let newdata = {product_name: 'apples', product_price: 233};
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    console.log(err);
  });
});

//Edit Events
app.put('/api/v1/events/:id',(req, res) => {
  let sql = "UPDATE events SET DateCategory='"+req.body.DateCategory+"', Location='"+req.body.Location+"', Message='"+req.body.Message+"' WHERE eventid="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});



//Server listening
app.listen(7000,() =>{
  console.log('Server started on port 7000...');
});
