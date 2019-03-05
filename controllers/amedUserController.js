
var AMEDUser = require('../models/AMEDUser')

// CREATE
exports.AMEDUser_create_post = function(req, res) {

    AMEDUser.create(req.body).then(result => res.send(result))

}

// READ
exports.AMEDUser_get_all = function(req, res) {

    AMEDUser.findAll().then(asd => res.send(asd))

}

exports.AMEDUser_get_by_id = function(req, res) {

    AMEDUser.findAll({ where: {login_id: req.params.login_id} }).then(result => {
        res.status(200).send(result)
    })

}

// UPDATE
exports.AMEDUser_update_put = function(req, res) {

    AMEDUser.update(
        req.body,
        {returning: true, where: {login_id: req.params.login_id} }
    )
        .then(result => res.send(result))

}

// DELETE
exports.AMEDUser_delete = function(req, res) {

    AMEDUser.destroy({
        where: {login_id: req.params.login_id}
    })
        .then(result => res.status(200).send(`AMEDUser with id ${req.params.login_id} deleted.`))

}