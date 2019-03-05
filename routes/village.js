var express = require('express')
var router = express.Router()
var village_controller = require('../controllers/villageController')

/* POST create symptoms sheet. */
router.post('/', village_controller.Village_create_post)

/* GET all symptoms sheet.  */
router.get('/', village_controller.Village_get_all)

/* GET symptoms sheet by id. */
router.get('/:id', village_controller.Village_get_by_name)

/* PUT update symptoms sheet. */
router.put('/:id', village_controller.Village_update_put)

/* DELETE symptoms sheet. */
router.delete('/:id', village_controller.Village_delete)

module.exports = router;
