const Dev = require('../models/Dev');
const parseStringAsArray = require("../utils/parseStringAsArray");
module.exports = {
    async index( request, response){
        //busca todos os devs num raio de 10km
        //filtrar por tecnologia
        const {latitude, longitude, techs} =  request.query;
        const techsArray = parseStringAsArray(techs);
        console.log(techsArray);
        console.log(request.query);

        const devs = await Dev.find({
            techs:{
                $in: techsArray,
            },
            location: {
                $near:{
                    $geometry: {
                       type:'Point',
                       coordinates:[longitude,latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });
        return response.json({ devs });
    }
}
