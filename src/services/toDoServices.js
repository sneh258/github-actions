//const HTTPError = require('../util/error/error');
const db = require('./../../database/models/index');

exports.getTasks = async () => {
    const tasks = await db.Todo.findAll();
    //console.log(tasks) returns array of objects
    return tasks;
};

exports.deleteTasks = async (id) => {
    // tasks = tasks.filter(function (item) {
    //     return item.id !== Number(id);
    // });
    await db.Todo.destroy({
        where: {
            id: id
        }
    });

};

exports.getTasksById = async (id) => {

    // let found = tasks.find(function (item) {
    //     return item.id === Number(id);
    // });
    const found = await db.Todo.findByPk(id);
    return found;

};

exports.postTasks = async (tasks) => {
   
    // console.log(body);
    //let newId = tasks.length + 1;
    //const newTask = Object.assign({ id: newId},task,{isCompleted:false});
    const newTask = await db.Todo.create({ tasks: tasks, isCompleted: false });
    console.log(newTask.data);
    return newTask;


};

exports.updateTasks = async (id, task) => {

    // const taskToUpdate = tasks.find((item) => item.id === Number(id));
    // const index = tasks.indexOf(taskToUpdate);
    // Object.assign(taskToUpdate, body);
    // tasks[index] = taskToUpdate;
    // return taskToUpdate;

    await db.Todo.update(
        { task: task },
        { where: { id: id } }
    );

    //return taskToUpdate;


};
