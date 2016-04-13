var express = require('express');
var path = require('path');

var router = express.Router();

var nouns = ['Spiral', 'Log', 'Cave', 'Capybara', 'Sap', 'Maharaja', 'Fishstick', 'Pharmacy', 'Cube', 'Moss', 'Elf'];
var adjectives = ['Garrulous', 'Superfluous', 'Malignant', 'Benign', 'Sparkly', 'Damp', 'Soggy', 'Chilly', 'Ostentatious', 'Silly', 'Rad']

var handleNouns={list:nouns};
var handleAdj={list:adjectives};

router.get('/', function(request, response){
  console.log('Whoop, here it is');
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

router.get('/nouns', function(request, response){
  console.log('nouns have arrived!');
  response.send(handleNouns);
});
router.get('/adjectives', function(request, response){
  console.log('adjectives are here');
  response.send(handleAdj);
})


module.exports = router;
