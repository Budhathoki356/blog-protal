const BlogModel = require('../models/blog.model')

const createBlog = (req, res, next) => {

    if (req.body.description.length > 90) {
        req.body.short_description = req.body.description.substring(0, 90) + "...";
    } else {
        req.body.short_description = req.body.description;
    }


    const newBlog = new BlogModel({
        title: req.body.title,
        description: req.body.description,
        short_description: req.body.short_description,
        image: req.body.image
    })

    newBlog.save((err, done) => {
        if (err) return next(err)
        res.status(200).json(done)
    })

};

const findAllBlog = (req, res, next) => {

    BlogModel.find({})
        .sort({
            createdAt: 'desc'
        })
        .then(blog => {
            if (!blog) return next({ message: 'No Blog Found.' })
            res.status(200).json(blog)
        })
        .catch(err => {
            return next(err)
        })

};

const findBlogById = (req, res, next) => {

    BlogModel.findById(req.params.id)
        .then(blog => {
            if (!blog) return next({ message: 'No Blog Found.' })
            res.status(200).json(blog)
        })
        .catch(err => {
            return next(err)
        })

};

const updateBlog = (req, res, next) => {

    BlogModel.findById(req.params.id, (err, blog) => {

        if (err) return next(err)

        blog.title = req.body.title
        blog.description = req.body.description
        blog.image = req.body.image

        if (req.body.description.length > 90) {
            blog.short_description = req.body.description.substring(0, 90) + "...";
        } else {
            blog.short_description = req.body.description;
        }

        blog.save((err, done) => {
            if (err) return next(err)
            res.status(200).json(done)
        })
    })

};

const deleteBlog = (req, res, next) => {
    BlogModel.findByIdAndRemove(req.params.id)
        .then(blog => {
            if (!blog) return next({ message: 'Blog not found.', status: 400 })
            res.status(200).json({
                message: 'Blog deleted.'
            })
        })
};

module.exports = {
    createBlog,
    findAllBlog,
    findBlogById,
    updateBlog,
    deleteBlog
}
