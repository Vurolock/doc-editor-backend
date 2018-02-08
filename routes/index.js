const express = require('express');
const router = express.Router();
const Note = require('../models/note');

router.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
})

router.route('/')
  .get((req, res) => {
    Note.findAll()
      .then(allNotes => {
        res.json(allNotes);
      });
  })
  .post((req, res) => {
    console.log(req.body);
    Note.create({
      title: req.body.title,
      content: req.body.content
    }).then(() => {
      // responds with error 201 'create' since there is no render or redirect to respond with
      res.status(201).send();
    }).catch((error) => {
      console.log(error);
    })
  });

module.exports = router;
