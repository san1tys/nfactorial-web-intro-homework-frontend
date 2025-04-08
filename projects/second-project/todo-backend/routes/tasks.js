const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const taskController = require('../controllers/taskController');

const createTaskValidation = [
  check('text', 'Text is required').not().isEmpty()
];

const validateTaskId = [
  check('id', 'Invalid task ID').isMongoId()
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.get('/', taskController.getTasks);

router.post(
  '/',
  createTaskValidation,
  handleValidationErrors,
  taskController.createTask
);

router.put(
  '/:id',
  validateTaskId,
  handleValidationErrors,
  taskController.updateTask
);

router.delete(
  '/:id',
  validateTaskId,
  handleValidationErrors,
  taskController.deleteTask
);

module.exports = router;
