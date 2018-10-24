var Player = require('../models/player');

exports.playerList = function(req, res) {
    Player.find(function(err, players) {
        if (err) {
            res.send(err);
        }
        res.json(players);
    });
}

exports.addPlayer = function(req, res) {
    var player = new Player();
    player.name = req.body.name;
    player.score = req.body.score;
    player.save(function(err) {
        if (err) {
            res.send('erro salvando jogador');
        }
        res.json({ message: 'Jogador cadastrado com sucesso' });
    });
}

exports.getPlayer = function(req, res) {

}

exports.editPlayer = function(req, res) {

}

exports.deletePlayer = function(req, res) {

}