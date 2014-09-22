var Task = require("../models/task");

module.exports.save = function(req, res){
    var task = new Task(req.body);
    task.save(function(err, result){
        res.json(result);
    });
}

module.exports.fetch = function(req, res){
    Task.find(function(err, result){
        res.json(result);
    });
}