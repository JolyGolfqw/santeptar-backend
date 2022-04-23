const { Router } = require('express')
const { usersController } = require('../controllers/users.controller')
const fileMiddleware = require('../middleware/fileMiddleware')

const router = Router()

router.get('/users', usersController.getUsers)
router.post('/users', usersController.registration)
router.patch('/user/:id', usersController.editProfile)
router.patch('/user/avatar/:id', fileMiddleware.single('img'), usersController.editAvatar)
router.post('/login', usersController.login)

module.exports = router