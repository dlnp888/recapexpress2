import { prisma } from '../prismaClient.js';

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

async function getAllTasks() {
    return prisma.task.findMany({
        orderBy: {
            id: 'asc',
        },
    });
}

async function getTaskById(id) {
    return prisma.task.findUnique({
        where: { id },
    });
}

async function createTask(title, description) {
    return prisma.task.create({
        data: { title, description },
    });
}

async function updateTask(id, title, completed) {
    return prisma.task.update({
        where: { id },
        data: { title, completed },
    });
}

async function deleteTask(id) {
    return prisma.task.delete({
        where: { id },
    });
}

export default {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
};
