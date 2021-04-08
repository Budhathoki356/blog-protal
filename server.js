const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// database
require('./config/mongoose.config')

// load middleware
const blogRouter = require('./routes/blogRoute')

app.use(morgan('dev'))
app.use(cors({
    origin: '*',
    method: ['POST','GET','PUT', 'DELETE']
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.set('port', process.env.PORT || 5000)

// middlewares
app.use('/blog', blogRouter)

// establish connection
app.listen(app.get('port'), (err, data) => {
    if (err) console.log('Fail to connect')
    console.log('Listening on port' + app.get('port'))
})