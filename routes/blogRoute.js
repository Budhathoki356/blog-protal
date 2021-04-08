const express = require('express');
const router = express.Router();

const blogController = require('../controller/blog')

router.post('/', blogController.createBlog)

router.get('/', blogController.findAllBlog)

router.get('/:id', blogController.findBlogById)

router.put('/:id', blogController.updateBlog)

router.delete('/:id', blogController.deleteBlog)

module.exports = router