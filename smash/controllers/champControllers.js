var Champ = require('../models/champ');
exports.champList = function(req, res) {
    Champ.find(function(err, champs) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Look, campeonatos' });
    });
}

exports.addChamp = function(req, res) {
    var champ = new Champ();
    champ.name = req.body.name;
    champ.saved = req.body.saved;
    champ.save(function(err) {
        if (err) {
            res.send('erro salvando jogador');
        }
        res.json({ message: 'Jogador cadastrado com sucesso' });
    });
}