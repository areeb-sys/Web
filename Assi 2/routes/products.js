var express = require('express');
var router = express.Router();
var Todos = require("../models/products");
var checkSessionAuth = require("../middlewares/checkSessionAuth");

/* GET home page. */
router.get('/', async function(req, res, next) {
  let todos = await Todos.find();
  console.log(req.session.user);
  res.render('products/list',{title:"Db will available here", todos});
});

router.get('/add',checkSessionAuth, async function(req, res, next) {
  res.render('products/add');
});

//store data in DB

router.post('/add', async function(req, res, next) {
  let todos = new Todos(req.body);
  await todos.save();
  res.redirect('/products');
});

 router.get('/delete/:id', async function(req, res, next) {
  let todos = await Todos.findByIdAndDelete(req.params.id);
 //res.send("Id from URL"+req.params.id);
  res.redirect('/products');
});

 router.get('/edit/:id', async function(req, res, next) {
  let todos = await Todos.findById(req.params.id);
 //res.send("Id from URL"+req.params.id);
  res.render('products/edit',{todos});
});

router.post('/edit/:id', async function(req, res, next) {
  let todos = await Todos.findById(req.params.id);
  todos.todos = req.body.todos;
  todos.date = req.body.date;
  todos.time = req.body.time;
  await todos.save();
 //res.send("Id from URL"+req.params.id);
  res.redirect('/products');
}); 

module.exports = router;
