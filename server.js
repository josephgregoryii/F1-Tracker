// Imports
const express = require('express')
const axios = require('axios')
const https = require('https')
const path = require('path')
const fs = require('fs')

require('dotenv').config()

const DIRECTORY_TO_SERVE = process.env.DIRECTORY_TO_SERVE
const BASE_URL = process.env.BASE_URL
const API_KEY = process.env.API_KEY
const FORMAT = process.env.FORMAT
const PORT = process.env.PORT
const HOST = process.env.HOST

const app = express()

app.use('/', express.static(path.join(__dirname, '..', DIRECTORY_TO_SERVE)))

app.get('/api/f1/seasons', (req, res) => {
    const url = `${BASE_URL}/seasons${FORMAT}?api_key=${API_KEY}`
    return axios
        .get(url)
        .then(info => res.send(info.data.stages))
        .catch(error => res.send(error.status))
})

// get results of stage parameter
// could be a stage for a season, race, event or lap.
app.get('/api/f1/seasons/stage/:stage', (req, res) => {
    const { stage } = req.params
    const url = `${BASE_URL}/sport_events/${stage}/summary${FORMAT}?api_key=${API_KEY}`
    console.log(url)
    return axios
        .get(url)
        .then(info => res.send(info.data))
        .catch(error => res.send(error.status))
})

// get results of driver information at stage
app.get('/api/f1/seasons/drivers/:driver', (req, res) => {
    const { driver } = req.params
    const url = `${BASE_URL}/competitors/${driver}/profile${FORMAT}?api_key=${API_KEY}`
    return axios
        .get(url)
        .then(info => res.send(info.data))
        .catch(error => res.send(error.status)) 
})

// get results of probabilities for a season stage
app.get('/api/f1/seasons/probabilities/:stage', (req, res) => {
    const { stage } = req.params
    const url = `${BASE_URL}/sport_events/${stage}/probabilities${FORMAT}?api_key=${API_KEY}`
    return axios
        .get(url)
        .then(info => res.send(info.data))
        .catch(error => res.send(error.status))
})

const httpsOptions = {
      key: fs.readFileSync(`./ssl/${HOST}.key`),
      cert: fs.readFileSync(`./ssl/${HOST}.crt`),
      requestCert: false,
      rejectUnauthorized: false
    }

const localApp = https.createServer(httpsOptions, app)

server = process.env.NODE_ENV === 'development' ? localApp : app

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})