const express = require('express');
const db = require('./models')
require('dotenv').config()

const app = express();


app.use(express.static('static'))
app.use(express.urlencoded({extended:true}))

app.route('/')
    .get(function(req,res) {
        db.show.findAll()
        .then(function(data){
            res.json(data)
        })
    })
    .post(function(req, res) {
        db.show.create({
            name: req.body.title,
            description: req.body.description,
            rating: req.body.rating
        })
        .then(function(data) {
            res.redirect('/')
        })
    })

app.route('/:id')
    .get(function(req,res) {
        db.show.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function(data) {
            res.json(data)
        })
    })
    .put(function(req, res) {
        db.show.update({
                name: req.body.title,
                description: req.body.description,
                rating: req.body.rating
            },
            {
                where: {id: req.params.id}
        })
        .then(
            function(data) {
                res.redirect('/' + req.params.id)
            }
        )
    })
    .delete(function(req, res) {
        db.show.destroy({
            where: {id: req.params.id}
        })
        .then(function(data) {
            res.redirect('/')
        })
    })


app.listen(process.env.PORT
    , function() {
        console.log('crud-api is running');
        console.log('listening on port: ' + process.env.PORT);
    })