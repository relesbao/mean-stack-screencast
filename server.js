var express         = require("express"),
    app             = express(),
    bodyParser      = require('body-parser'),
    mongoose        = require('mongoose'),
    tasksController = require("./app/controllers/tasksController");

mongoose.connect('mongodb://localhost:27017/demoapp');

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.use('/js', express.static(__dirname + '/public/js'));

app.get('/api/tasks', tasksController.fetch)
app.post('/api/tasks', tasksController.save);

app.listen(process.env.PORT, function(){
    console.log('Rodando...');
});