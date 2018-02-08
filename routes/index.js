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
    	Note.findAll({
			order: [['id', 'ASC']]
		}).then(allNotes => {
			// responds with all notes
        	res.json(allNotes);
      	});
  	})
  	.post((req, res) => {
    	Note.create({
      		title: req.body.title,
      		content: req.body.content
    	}).then((newNote) => {
      		// responds with new note
      		res.json(newNote);
    	});
  	})
  	.put((req, res) => {
		Note.findOne({
			where: {id: req.body.id}
		}).then(note => {
			note.updateAttributes({
				title: req.body.title,
				content: req.body.content
			}).then((editedNote) => {
				// responds with edited note
				res.json(editedNote)
			});
		});
  	})
	.delete((req, res) => {
		Note.destroy({
			// delete here
		}).then((deletedNote) => {
			// responds with deleted note
			res.json(deletedNote)
		});
	});

module.exports = router;
