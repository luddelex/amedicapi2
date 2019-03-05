var express = require('express')
var router = express.Router()
var visit_controller = require('../controllers/visitController')

/* POST create symptoms sheet. */
router.post('/', visit_controller.Visit_create_post)

/* GET all symptoms sheet.  */
router.get('/', visit_controller.)

/* GET symptoms sheet by id. */
router.get('/:id', visit_controller.Visit_get_by_all)

/* PUT update symptoms sheet. */
router.put('/:id', visit_controller.Visit_update_put)

/* DELETE symptoms sheet. */
router.delete('/:id', visit_controller.Visit_delete)

module.exports = router;
