/*
                  Get
[Browser]   ⇔ ⇔ ⇔ ⇔ ⇔ ⇔
                                Server
[Mobile]    ⇔ ⇔ ⇔ ⇔ ⇔ ⇔
                Express

listen
/: home route
/login : login setup
*/
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/youtube', (req, res) => {
    res.send('@Iamrupuu')
})

app.get('/login', (req, res) => {
    res.send(`<h1>please login at our website</h1>`)
})

app.get('/register', (req, res) => {
    res.send(`<h1>please register at our website</h1>`)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
})
