const mongoose = require('mongoose')
const config = require('./index')

mongoose.set('useCreateIndex', true);

mongoose.connect(config.dbUrl + '/' + config.dbName, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true }, (err, done) => {
    if (err) console.log('Error in connecting to db.')
    else console.log('DB connection success.')
})