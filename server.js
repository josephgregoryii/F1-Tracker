// Imports
const express = require('express')
const axios = require('axios')
const https = require('https')
const path = require('path')
const fs = require('fs')

const cache = require('./routeCache')

require('dotenv').config()

const DIRECTORY_TO_SERVE = process.env.DIRECTORY_TO_SERVE

const API_KEY = process.env.API_KEY
const HOST = process.env.HOST
const PORT = process.env.PORT

const app = express()

app.use('/', express.static(path.join(__dirname, '..', DIRECTORY_TO_SERVE)))

app.get('/api/f1/seasons', cache(30000), (req, res) => {
    const options = {
        method: 'GET',
        url: `https://${HOST}/seasons`,
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': HOST
        }
    }
    console.log(options.url)
    return axios
        .request(options)
        .then(info => res.send(info.data))
        .catch(error => res.send(error.status))
})

// get results of stage parameter
// could be a stage for a season, race, event or lap.
app.get('/api/f1/seasons/:season/races', cache(30000), async (req, res) => {
    const { season } = req.params
    const options = {
        method: 'GET',
        url: `https://${HOST}/races/${season}`,
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': HOST
        }
    }
    return axios
        .request(options)
        .then(info => res.send(info.data))
        .catch(error => res.send(error.status))
})

app.get('/api/f1/session/:session_id', cache(30000), async (req, res) => {
    const { session_id } = req.params
    const options = {
        method: 'GET',
        url: `https://${HOST}/session/${session_id}`,
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': HOST 
        }
    }
    return axios
        .request(options)
        .then(info => res.send(info.data))
        .catch(error => res.send(error.status))
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})