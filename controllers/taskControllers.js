import taskServices from '../services/taskServices.js';

export function getAllTasks(req, res) {
    const tasks = taskServices.getAllTasks();
    res.status(200).json(tasks);
}

export function getTaskById(req, res) {
    const task = taskServices.getTaskById(parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
}

export function createTask(req, res) {
    const { title } = req.body;
    const newTask = taskServices.createTask(title);
    res.status(201).json(newTask);
}

export function updateTask(req, res) {
    const { id } = req.params;
    const { title, completed } = req.body;
    const updatedTask = taskServices.updateTask(parseInt(id), title, completed);
    if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.json(updatedTask);
}

export function deleteTask(req, res) {
    const { id } = req.params;
    const deletedTask = taskServices.deleteTask(parseInt(id));
    if (!deletedTask) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json({
        message: 'Task deleted successfully',
        deletedTask,
    });
}
