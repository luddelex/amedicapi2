var express = require('express')
var router = express.Router()
var caregiver_patient_controller = require('../controllers/careGiver_PatientController')
let middleware = require('../middleware')

/* POST create caregiver. */
router.post('/', caregiver_patient_controller.CareGiver_Patient_create_post)

/* GET all caregivers.  */
router.get('/', caregiver_patient_controller.CareGiver_Patient_get_all)

/* GET caregiver by id. */
router.get('/:id', caregiver_patient_controller.CareGiver_Patient_get_by_patientid_and_caregiverid)

/* PUT update caregiver. */
router.put('/:id', caregiver_patient_controller.CareGiver_Patient_update_put)

/* DELETE caregiver. */
router.delete('/:id', caregiver_patient_controller.CareGiver_Patient_delete)

module.exports = router;
