// Create web server

// Import express
const express = require('express');
const router = express.Router();

// Import comment controller
const commentController = require('../controllers/comment.controller');

// Get all comments
router.get('/', commentController.getComments);

// Get a comment by id
router.get('/:id', commentController.getCommentById);

// Create a new comment
router.post('/', commentController.createComment);

// Update a comment by id
router.put('/:id', commentController.updateComment);

// Delete a comment by id
router.delete('/:id', commentController.deleteComment);

// Export router
module.exports = router;
