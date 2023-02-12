const Joi = require('joi');
const checkBody = (req, res, next) => {
    const schema = Joi.object({
        task: Joi.string().required()
    });
    const {error, value} = schema.validate(req.body);
    if(error) {
        res.status(400).json({ message: error.message });
        return;
    }
    next();

};

const checkParams = (req, res, next) => {
    const schema = Joi.object({
        id: Joi.number().required()
    });
    const { error } = schema.validate(req.params);
    if(error) {
        res.status(400).json({ message: error.message });
        return;
    }
    next();
};


const checkPatchObject = (req, res, next) => {
    const schema = Joi.object({
        id: Joi.number(),
        task: Joi.string(),
        isCompleted: Joi.boolean(),
    });
    const { error } = schema.validate(req.body);
    if(error) {
        res.status(400).json({ message: error.message });
        return;
    }
    next();
};
module.exports = {checkBody,checkParams,checkPatchObject} ;