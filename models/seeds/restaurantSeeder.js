const Restaurant = require('../restaurant.js')
const restaurants = require('./restaurant.json')
const restaurantList = restaurants.results

const db = require('../../config/mongoose.js')

db.once('open', () => {
  Restaurant.create(restaurantList)
    .then(() => console.log('done'))
    .catch(error => console.log(error))
})