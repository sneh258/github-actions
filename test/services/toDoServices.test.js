const getDatabase = require('./../../database/models/index');
const getServices = require('./../../src/services/toDoServices');


describe('ToDo Services', () => {
    it('should return an array of objects', async () => {
        jest.spyOn(getDatabase.Todo, 'findAll').mockResolvedValue([
            { id: 1, task: 'hello', isComplete: true }
        ]
        );

        const task = await getServices.getTasks();
        expect(task).toEqual(
            [
                { id: 1, task: 'hello', isComplete: true }

            ]
        );
    });
    it('should return an array of objects', async () => {
        jest.spyOn(getDatabase.Todo, 'destroy').mockResolvedValue([
            { id: 1 }
        ]
        );

        const task = await getServices.deleteTasks();
        expect(task).toEqual(undefined);
    });
    it('should return an array of objects', async () => {
        jest.spyOn(getDatabase.Todo, 'findByPk').mockResolvedValue([
            { id: 1 }
        ]
        );

        const task = await getServices.getTasksById();
        expect(task).toEqual([{id:1}]);
    });
    it('should return an array of objects', async () => {
        jest.spyOn(getDatabase.Todo, 'create').mockResolvedValue([
            { id: 1, task: 'hello', isComplete: true }
        ]
        );

        const task = await getServices.postTasks();
        expect(task).toEqual([ { id: 1, task: 'hello', isComplete: true }]);
    });
    it('should return an array of objects', async () => {
        jest.spyOn(getDatabase.Todo, 'update').mockResolvedValue([
            { id: 1, task: 'hello', isComplete: true }
        ]
        );

        const task = await getServices.updateTasks();
        expect(task).toEqual(undefined);
    });

});   