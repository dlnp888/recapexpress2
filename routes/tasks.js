import express from 'express';
import {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
} from '../controllers/taskControllers.js';

const router = express.Router();
router.get('/:id', getTaskById);
router.get('/', getAllTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
