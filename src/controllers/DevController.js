const axios = require('axios');
const Dev = require('../models/Dev');
module.exports = {
    async store(req, res){
        const { username } = req.body;

        const userExist = await Dev.findOne({user: username})

        if(!userExist){
        
            const response = await axios.get(`https://api.github.com/users/${username}`);
            const {name, avatar_url:avatar, bio} = response.data;
            
            const dev = await Dev.create({
                name,
                user: username,
                bio,
                avatar
            });
            return res.json(dev);
        }
        else{
            return res.json({message: 'User has exist'});
        
        }


    }
}