const Restaurant = require('../restaurant.js')
const User = require('../user.js')
const bcrypt = require('bcryptjs')
const db = require('../../config/mongoose.js')

const restaurants = require('./restaurant.json')
const restaurantsList = restaurants.results

const SEED_USER = [{
  name: 'user1',
  email: 'user1@example.com',
  password: '12345678',
  userList: [0, 1, 2]
},
{
  name: 'user2',
  email: 'user2@example.com',
  password: '12345678',
  userList: [3, 4, 5]
}]

db.once('open', () => {
  Promise.all(SEED_USER.map(seed => {
    return bcrypt.genSalt(10)
      .then(salt => bcrypt.hash(seed.password, salt))
      .then(hash => User.create({
        name: seed.name,
        email: seed.email,
        password: hash,
      }))
      .then(user => {
        const restaurantSeeds = seed.userList.map(index => {
          restaurantsList[index].userId = user._id
          return restaurantsList[index]
        })
        return Restaurant.create(restaurantSeeds)
      })
      .catch(err => console.log(err))
  }))
    .then(() => {
      console.log('All done')
      process.exit()
    })
})


