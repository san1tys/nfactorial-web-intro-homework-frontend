const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const HTTP_STATUS = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
    CREATED: 201,
    OK: 200
};

const JWT_CONFIG = {
    expiresIn: '7d'
};

const handleAuthError = (res, error, context) => {
    console.error(`${context} error:`, error);
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
        error: `Authentication error: ${error.message}`
    });
};

exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({
                error: 'User with this email already exists'
            });
        }

        const user = new User({ name, email, password });
        await user.save();

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            JWT_CONFIG
        );

        const userResponse = {
            id: user._id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt
        };

        return res.status(HTTP_STATUS.CREATED).json({
            token,
            user: userResponse
        });

    } catch (error) {
        return handleAuthError(res, error, 'Registration');
    }
};

exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({
                error: 'Invalid email or password'
            });
        }

        const isMatch = await user.isValidPassword(password);
        if (!isMatch) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({
                error: 'Invalid email or password'
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            JWT_CONFIG
        );

        const userResponse = {
            id: user._id,
            name: user.name,
            email: user.email
        };

        return res.status(HTTP_STATUS.OK).json({
            token,
            user: userResponse
        });

    } catch (error) {
        return handleAuthError(res, error, 'Login');
    }
};

exports.getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
            .select('-password -__v')
            .lean();

        if (!user) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({
                error: 'User not found'
            });
        }

        return res.status(HTTP_STATUS.OK).json(user);
    } catch (error) {
        return handleAuthError(res, error, 'Fetch user');
    }
};