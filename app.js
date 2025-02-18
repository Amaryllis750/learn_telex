const express = require('express');
const application = express();
const helpers = require('./helpers');
const integrationSpecs = require('./data/integrationSpecs');

// use middleware
application.use(express.json());

application.get('/', async(req, res) => {
    return res.status(200).json(integrationSpecs);
});

application.post('/capitalize-names', async(req, res)=> {
    const object = req.body;
    if(!object ) return res.status(400).json({'message': 'Request body is not supposed to be empty'});
    
    const formatted_message = helpers.capitalizeNames(object);
    const response_object = {
        "event_name": "names_capitalized", 
        "message": formatted_message, 
        "status": "success", 
        "username": "name-capitalizer-bot"
    }

    return res.status(200).json(response_object);
});

module.exports = application;