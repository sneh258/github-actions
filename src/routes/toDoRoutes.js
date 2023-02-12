const express = require('express');
const router = express.Router();
const taskController = require('./../controllers/toDoControllers');
const middleWare = require('./../middleware/middleware');
const authMiddleware=require('./../middleware/toDoAuth');

router.route('/')
    .get(authMiddleware.validateToken,taskController.getTasks)
    .post(taskController.postTasks);
router.route('/:id')
    .patch(middleWare.checkPatchObject,taskController.updateTasks)
    .delete(middleWare.checkBody,middleWare.checkParams,taskController.deleteTasks)
    .get(middleWare.checkParams,taskController.getTasksById);

module.exports = router;  