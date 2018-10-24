var express = require('express');
var app = express();
var router = express.Router();

var PlayerController = require('../controllers/playerController');
var ChampController = require('../controllers/champControllers');

router.get('/', function(req, res) {
    res.json({ message: 'This api is working!' });
});
/* Player Routes*/
router.get('/players/', PlayerController.playerList);
router.post('/players/', PlayerController.addPlayer);
/* Championship Routes*/
router.get('/champs/', ChampController.champList);
router.get('/champs/', ChampController.addChamp);


module.exports = router;