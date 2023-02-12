const getFunction = require('./../services/toDoServices');
//const getFunction = require('./../../database/models/index')

//const Joi = require('joi');
exports.getTasks = async (req, res) => {
    
    try
    {
        const tasks = await getFunction.getTasks();
        res.status(200).json(tasks);
    }catch (error) {
        res.status(500).json({
            error: error.message

        });
    }

};

// res.status()

// const res = {
//     status: () => {
//         kjsj
//         return res;
//     },
//     json: () => {
//         kjsdjk
//         return res;
//     }
// }
exports.getTasksById = async (req, res) => {

    try {
        const { id } = req.params;
        const found = await getFunction.getTasksById(id);
        if (found) {
            res.status(200).json(found);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        res.status(500).json({
            error: error.message

        });
    }
};

exports.deleteTasks = async (req, res) => {
    try {
        const { id } = req.params;
        await getFunction.deleteTasks(id);
        res.status(200).send('deleted');
    } catch (error) {
        res.status(500).json({
            error: error.message

        });
    }
};

exports.updateTasks = async (req, res) => {
    try {
        const { id } = req.params;
        const { task } = req.body;
        const taskToUpdate = await getFunction.updateTasks(id, task);
        res.status(200).send(taskToUpdate);
    } catch (error) {
        res.status(500).json({
            error: error.message

        });
    }
};

exports.postTasks = async (req, res) => {
    try {

        const { tasks } = req.body;
        console.log(tasks);
        console.log(tasks[0]);
        const newTask = await getFunction.postTasks(tasks);
        res.status(201).json(newTask);

    } catch (error) {
        res.status(500).json({
            error: error.message

        });
    }
};



