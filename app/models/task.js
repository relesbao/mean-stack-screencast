var mongoose = require("mongoose");

module.exports = mongoose.model('Task', {
    description: String
});