
const dev = require('../models/Dev');

module.exports ={
    async store(req, res){
        const {user} = req.headers;
        const {devId} = req.params

        const loggerDev = await dev.findById(user);
        const targetDev = await dev.findById(devId);

        if(!targetDev){
            return res.status(400);    
        }

    }
}