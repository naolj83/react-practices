const model = require('../models/guestbook');

module.exports = {
    readAll: async function(req, res, next) {
        try {
            const results = await model.findAll();
            res
                .status(200)                
                .send({
                    result: 'success',
                    data: results,
                    message: null
                });
        } catch(err){
          next(err);
        }       
    },
    create: async function(req, res, next) {
        try {   
            const result = await model.insert({
                name: req.body.name,
                password: req.body.password,
                message: req.body.message
            });
            res
                .status(200)                
                .send({
                    result: 'success',
                    data: result,
                    message: null
                });


        } catch(err){
            next(err);
        }
    }
}