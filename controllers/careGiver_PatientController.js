var CareGiver_Patient = require('../models/CareGiver_Patient')

// CREATE
exports.CareGiver_Patient_create_post = function(req, res) {

    CareGiver_Patient.create(req.body).then(result => res.send(result))

}

// READ
exports.CareGiver_Patient_get_all = function(req, res) {

    CareGiver_Patient.findAll().then(asd => res.send(asd))

}

exports.CareGiver_Patient_get_by_patientid_and_caregiverid = function(req, res) {

    CareGiver_Patient.findAll({ where: {patient_id: req.params.patient_id, caregiver_id: req.params.caregiver_id} }).then(result => {
        res.status(200).send(result)
    })

}

// UPDATE
exports.CareGiver_Patient_update_put = function(req, res) {

}

// DELETE
exports.CareGiver_Patient_delete = function(req, res) {

}