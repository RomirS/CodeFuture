const router = require('express').Router();
let Chapter = require('../models/chapter.model');

router.get('/', (req, res) => {
  Chapter.find()
    .then(chapters => res.json(chapters))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', (req, res) => {
  const school = req.body.school;
  const email = req.body.email;

  const newChapter = new Chapter({school, email});

  newChapter.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;