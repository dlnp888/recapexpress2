import taskServices from '../services/taskServices.js';

export async function getAllTasks(req, res) {
    const tasks = await taskServices.getAllTasks();
    res.status(200).json(tasks);
}

export async function getTaskById(req, res) {
    const task = await taskServices.getTaskById(parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
}

export async function createTask(req, res) {
    const { title } = req.body;
    const { description } = req.body;
    const newTask = await taskServices.createTask(title, description);
    res.status(201).json(newTask);
}

export async function updateTask(req, res) {
    const { id } = req.params;
    const { title, completed } = req.body;
    const updatedTask = await taskServices.updateTask(
        parseInt(id),
        title,
        completed,
    );
    if (!updatedTask) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.json(updatedTask);
}

export async function deleteTask(req, res) {
    const { id } = req.params;
    const deletedTask = await taskServices.deleteTask(parseInt(id));
    if (!deletedTask) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json({
        message: 'Task deleted successfully',
        deletedTask,
    });
}
