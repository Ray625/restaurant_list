const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const restaurants = require('./restaurant.json')
const app = express()
const port = 3000

// 加入這段 code, 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
  const restaurantList = restaurants.results
  res.render('index', { restaurants: restaurantList })
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurantList = restaurants.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', { restaurants: restaurantList, keyword })
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