const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/authMiddleware');
const { getProfile } = require('../controllers/authController');

router.get('/profile', authMiddleware, getProfile);

module.exports = router;
