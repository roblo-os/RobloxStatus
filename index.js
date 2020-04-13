const express = require('express')
const path = require('path')
const status = require('./status.js')
const cors = require("cors")
const PORT = process.env.PORT || 5000

status.start()

var app = express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .use(cors())
  .set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('pages/index', { status: status.getStatus() })
})

app.get('/json', (req, res) => {
  res.json(status.getStatus())
})

app.get('/json/incident', (req, res) => {
  res.json(status.getIncident())
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
