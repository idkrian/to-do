const router = require('express').Router();
const TaskController = require('../controllers/TaskController')

router.post('/create', TaskController.create)
router.get('/', TaskController.getAll)
router.get('/:id', TaskController.getOne)
router.delete('/:id', TaskController.delete)

module.exports = router;