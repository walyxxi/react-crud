var express = require('express');
var router = express.Router();
var Phonebook = require('../models/phonebook');

/* GET users listing. */
router.get('/', (req, res) => {
  Phonebook.find().then(data => {
    res.json(data);
  }).catch(err => {
    res.json(err);
  })
});

router.post('/', (req, res) => {
  Phonebook.insertMany({
    id: req.body.id,
    name: req.body.name,
    phone: req.body.phone
  }).then(data => {
    res.json(data);
  }).catch(err => {
    res.json(err);
  })
})

router.put('/:id', (req, res) => {
  Phonebook.updateOne({ id: req.params.id }, 
  {
    $set:  
      {
        name: req.body.name,
        phone: req.body.phone      
      }
  }).then(data => {
    res.json(data);
  }).catch(err => {
    res.json(err);
  })
})

router.delete('/:id', (req, res) => {
  Phonebook.deleteOne({ id: req.params.id })
    .then(data => {
      res.json(data);
    }).catch(err => {
      res.json(err);
    })
})

module.exports = router;
