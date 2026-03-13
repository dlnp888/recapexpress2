let tasks = [
    {
        id: 1,
        title: 'Learn Express',
        completed: false,
    },
    {
        id: 2,
        title: 'Learn DB',
        completed: true,
    },
    {
        id: 3,
        title: 'Learn ORMs',
        completed: false,
    },
];

function getAllTasks() {
    return tasks;
}

function getTaskById(id) {
    return tasks.find((task) => task.id === id) || null;
}

function createTask(title) {
    const newTask = {
        id: tasks.length + 1,
        title,
        completed: false,
    };
    tasks.push(newTask);
    return newTask;
}

function updateTask(id, title, completed) {
    const task = getTaskById(id);
    if (!task) return null;
    task.title = title !== undefined ? title : task.title;
    task.completed = completed !== undefined ? completed : task.completed;
    return task;
}

function deleteTask(id) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index === -1) return null;
    return tasks.splice(index, 1)[0];
}

export default {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
};
