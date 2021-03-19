const joi = require('@hapi/joi')

var scheme = joi.object({
    eid: joi.number().integer().required(),
    email: joi.string().required().email().lowercase(),
    name: joi.string().alphanum().min(3).max(10).required(),
    company: joi.string().required(),
    position: joi.string().required().alphanum(),
    salary: joi.number().integer().required()
})

module.exports=scheme