const mongooose = require('mongoose');

const tokenSchema = new mongooose.Schema({
    // Your code goes here
    token:{
        type: String,
        require: true
    }
})

const RefreshToken = mongooose.model('tokens', tokenSchema);

module.exports = RefreshToken;
