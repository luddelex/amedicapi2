var Visit = require('../models/Treatment_Visit')

// CREATE
exports.Visit_create_post = function(req, res) {

    Visit.create(req.body).then(result => res.send(result))

}

// READ
exports.Visit_get_all = function(req, res) {

    Visit.findAll().then(asd => res.send(asd))

}

exports.Visit_get_by_all = function(req, res) {

    Visit.findAll({ where: {patient_id: req.params.patient_id, diagnosis_id: req.params.diagnosis_id, user_id: req.params.user_id, symptoms_sheet_id: req.params.symptoms_sheet_id} }).then(result => {
        res.status(200).send(result)
    })

}

// UPDATE
exports.Visit_update_put = function(req, res) {

}

// DELETE
exports.Visit_delete = function(req, res) {

}