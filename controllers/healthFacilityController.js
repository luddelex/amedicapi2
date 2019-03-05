var HealthFacility = require('../models/HealthFacility')

// CREATE
exports.HealthFacility_create_post = function(req, res) {

    HealthFacility.create(req.body).then(result => res.send(result))

}

// READ
exports.HealthFacility_get_all = function(req, res) {

    HealthFacility.findAll().then(asd => res.send(asd))

}

exports.HealthFacility_get_by_name = function(req, res) {

    HealthFacility.findAll({ where: {name: req.params.name} }).then(result => {
        res.status(200).send(result)
    })

}

// UPDATE
exports.HealthFacility_update_put = function(req, res) {

}

// DELETE
exports.HealthFacility_delete = function(req, res) {

}