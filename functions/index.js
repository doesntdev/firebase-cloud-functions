const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const app = express();

// Automatically allow cross-origin requests
app.use(cors({
    origin: true
}));

app.get('/', (req, res) => {
    res.send("Hello world")
}) 

app.post('/email', (req, res) => {
    res.send(req.body)
})

const main = express()
main.use('/api', app)

exports.main = functions.https.onRequest((req, res) => {
    if (!req.path) {
        req.url = `/${req.url}`
    }
    return main(req, res)
})

