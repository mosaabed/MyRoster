const express = require('express')
const path = require('path')
const app = express()

const port = 3000
app.listen(port, function(){
    console.log("Server is up and running smoothly")
})
app.use(express.static(path.join(__dirname, 'dist')))