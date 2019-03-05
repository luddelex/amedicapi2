var Notes = require('../models/Notes')

// CREATE
exports.Notes_create_post = function(req, res) {

    Notes.create(req.body).then(result => res.send(result))

}

// READ
exports.Notes_get_all = function(req, res) {

    Notes.findAll().then(asd => res.send(asd))

}

exports.Notes_get_by_id = function(req, res) {

    Notes.findAll({ where: {ID: req.params.ID} }).then(result => {
        res.status(200).send(result)
    })

}

// UPDATE
exports.Notes_update_put = function(req, res) {

}

// DELETE
exports.Notes_delete = function(req, res) {

}