var District = require('../models/District')

// CREATE
exports.District_create_post = function(req, res) {

    District.create(req.body).then(result => res.send(result))

}

// READ
exports.District_get_all = function(req, res) {

    District.findAll().then(asd => res.send(asd))

}

exports.District_get_by_name = function(req, res) {

    District.findAll({ where: {name: req.params.name} }).then(result => {
        res.status(200).send(result)
    })

}

// UPDATE
exports.District_update_put = function(req, res) {

}

// DELETE
exports.District_delete = function(req, res) {

}