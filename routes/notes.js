var express = require('express')
var router = express.Router()
var notes_controller = require('../controllers/notesController')
let middleware = require('../middleware')

/* POST create caregiver. */
router.post('/', notes_controller.Notes_create_post)

/* GET all caregivers.  */
router.get('/', notes_controller.Notes_get_all)

/* GET caregiver by id. */
router.get('/:id', notes_controller.Notes_get_by_id )

/* PUT update caregiver. */
router.put('/:id', notes_controller.Notes_update_put)

/* DELETE caregiver. */
router.delete('/:id', notes_controller.Notes_delete)

module.exports = router;
