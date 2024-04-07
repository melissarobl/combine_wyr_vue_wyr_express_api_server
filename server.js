const express = require('express')

const path = require('path')
// tell express about static files

const indexRouter = require('./routes/index')  //import router

const app = express()  // new web app server

const staticFilePath = path.join(__dirname, 'client', 'dist')
const staticFiles = express.static(staticFilePath) //tell express where the files are
app.use('/', staticFiles)  // '/' is homepage of express app, when we go there, we see the staticFiles (which are the vue client files now)


app.use('/', indexRouter) //make routes in index.js available to the app

const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port ', server.address().port)
})
//message lets us know the server is running and what port
//server is just responding with JSON