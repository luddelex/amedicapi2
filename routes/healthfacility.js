var express = require('express')
var router = express.Router()
var healthfacility_controller = require('../controllers/healthFacilityController')
let middleware = require('../middleware')

/* POST create caregiver. */
router.post('/', healthfacility_controller.HealthFacility_create_post)

/* GET all caregivers.  */
router.get('/', healthfacility_controller.HealthFacility_get_all)

/* GET caregiver by id. */
router.get('/:id', healthfacility_controller.HealthFacility_get_by_name )

/* PUT update caregiver. */
router.put('/:id', healthfacility_controller.HealthFacility_update_put)

/* DELETE caregiver. */
router.delete('/:id', healthfacility_controller.HealthFacility_delete)

module.exports = router;
