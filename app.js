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

app.get('/search', (req, res) => {
  const restaurant = restaurants.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(req.query.keyword.toLowerCase()) || restaurant.category.toLowerCase().includes(req.query.keyword.toLowerCase())
  })
  res.render('index', { restaurant, keyword: req.query.keyword })
})

app.get('/restaurants/:id', (req, res) => {
  const restaurant = restaurants.results.find(restaurant => {
    return restaurant.id.toString() === req.params.id
  })
  res.render('show', { restaurant })
})

app.listen(port, () => {
  console.log(`The web app is running on http://localhost:${port}`)
})