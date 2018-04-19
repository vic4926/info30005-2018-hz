const users = require('../web v1.0/models/db');

module.exports.fetchAllUsers = function(req,res){
    res.send(users);
};

module.exports.fetchUser = function(req,res){
    res.render('home.ejs', {home : users[req.params.id]});
};