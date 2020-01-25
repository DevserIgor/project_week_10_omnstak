const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require("../utils/parseStringAsArray");
//um controller tem 5 funões 
//index = quando quero listar
//show  = quando quero mostrar um único
//store = quando quero adcionar
//update = alterar um 
//destroy = quando quer excluir

module.exports = {

    async index(request,response){
        const devs  = await Dev.find();
        return response.json(devs);
    },
    async store(request,response){
        const { github_username, techs, latitude, longitude } = request.body;
        //console.log(request.body);

        let dev = await Dev.findOne({github_username});

        if (!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
            const {name = login , bio, avatar_url } = apiResponse.data;
            
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        }
    
        
        return response.json(dev);
    }
};