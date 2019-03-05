var express = require('express')
var router = express.Router()
var district_controller = require('../controllers/districtController')
let middleware = require('../middleware')

/* POST create caregiver. */
router.post('/', district_controller.District_create_post)

/* GET all caregivers.  */
router.get('/', district_controller.District_get_all)

/* GET caregiver by id. */
router.get('/:id', district_controller.District_get_by_name)

/* PUT update caregiver. */
router.put('/:id', district_controller.District_update_put)

/* DELETE caregiver. */
router.delete('/:id', district_controller.District_delete)

module.exports = router;
