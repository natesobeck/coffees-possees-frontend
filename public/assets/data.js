const shop = {
  _id: 1,
  name: 'Ellies Shop',
  address: '1 street road',
  zipCode: '01234',
  city: 'Amsterdam',
  addedBy: 'Ellie',
  reviews: [],
  clubs: []
}

const club = {
  _id: 2,
  name: 'Fan Club🪭',
  category: 'hobby',
  timeOfDay: 'morning',
  members: []
}

const review = {
  _id: 3,
  text: 'superrrrr',
  price: 1000000,
  rating: 5,
  coffeeShopAmbience: 'spacious',
  wifiStrength: 4,
  addedBy: 'Nate'
}

export {
  club, review, shop
}