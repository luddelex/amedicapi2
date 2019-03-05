var Village = require('../models/Treatment_Village')

// CREATE
exports.Village_create_post = function(req, res) {

    Village.create(req.body).then(result => res.send(result))

}

// READ
exports.Village_get_all = function(req, res) {

    Village.findAll().then(asd => res.send(asd))

}

exports.Village_get_by_name = function(req, res) {

    Village.findAll({ where: {name: req.params.name} }).then(result => {
        res.status(200).send(result)
    })

}

// UPDATE
exports.Village_update_put = function(req, res) {

}

// DELETE
exports.Village_delete = function(req, res) {

}