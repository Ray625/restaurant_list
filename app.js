const express = require('express')
const exphbs = require('express-handlebars')
const restaurants = require('./restaurant.json')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send(`Hello world`)
})

app.listen(port, () => {
  console.log(`The web app is running on http://localhost:${port}`)
})