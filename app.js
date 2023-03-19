const express = require('express')
const exphbs = require('express-handlebars')
const restaurants = require('./restaurant.json')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  const restaurantList = restaurants.results
  res.render('index', { restaurant: restaurantList })
})

app.listen(port, () => {
  console.log(`The web app is running on http://localhost:${port}`)
})