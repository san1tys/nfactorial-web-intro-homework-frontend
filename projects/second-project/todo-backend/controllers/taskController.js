const Task = require('../models/Task');
const { validationResult } = require('express-validator');

const HTTP_STATUS = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    CREATED: 201,
    OK: 200
};

const handleError = (res, error, context) => {
    console.error(`${context} error:`, error);
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: `Server error during ${context}`
    });
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id })
            .sort({ createdAt: -1 })
            .lean();
        return res.status(HTTP_STATUS.OK).json(tasks);
    } catch (error) {
        return handleError(res, error, 'get tasks');
    }
};

exports.createTask = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({ errors: errors.array() });
    }

    try {
        const { text } = req.body;

        const newTask = new Task({
            text,
            user: req.user.id
        });

        const task = await newTask.save();
        return res.status(HTTP_STATUS.CREATED).json(task);
    } catch (error) {
        return handleError(res, error, 'create task');
    }
};

exports.updateTask = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({ errors: errors.array() });
    }

    try {
        const { isCompleted, isTrash, text } = req.body;

        let task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Task not found' });
        }

        if (task.user.toString() !== req.user.id) {
            return res.status(HTTP_STATUS.FORBIDDEN).json({ error: 'Not authorized' });
        }

        const updates = {};
        if (isCompleted !== undefined) updates.isCompleted = isCompleted;
        if (isTrash !== undefined) updates.isTrash = isTrash;
        if (text) updates.text = text;

        task = await Task.findByIdAndUpdate(
            req.params.id,
            { $set: updates },
            { new: true, runValidators: true }
        );

        return res.status(HTTP_STATUS.OK).json(task);
    } catch (error) {
        return handleError(res, error, 'update task');
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ error: 'Task not found' });
        }

        if (task.user.toString() !== req.user.id) {
            return res.status(HTTP_STATUS.FORBIDDEN).json({ error: 'Not authorized' });
        }

        await Task.deleteOne({ _id: req.params.id });
        return res.status(HTTP_STATUS.OK).json({ message: 'Task removed successfully' });
    } catch (error) {
        return handleError(res, error, 'delete task');
    }
};