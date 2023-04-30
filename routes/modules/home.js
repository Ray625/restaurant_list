const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .sort({ name: 'asc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

router.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const sortMethod = req.query.sortMethod
  let sortIndex = { name: 'asc' }
  switch (sortMethod) {
    case 'Z -> A':
      sortIndex = { name: 'desc' };
      break;
    case '類別':
      sortIndex = { category: 'asc' };
      break;
    case '地區':
      sortIndex = { location: 'asc' };
      break;
    default:
      sortIndex = { name: 'asc' };
      break;
  }

  Restaurant.find({
    $or: [
      { name: { $regex: new RegExp(keyword, 'i') } },
      { category: { $regex: new RegExp(keyword, 'i') } },
    ]
  })
    .lean()
    .sort(sortIndex)
    .then(restaurants => res.render('index', { restaurants, keyword, sortMethod }))
    .catch(error => console.log(error))
})

module.exports = router