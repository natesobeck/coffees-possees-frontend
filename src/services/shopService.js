import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/coffeeshops`

async function index() {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(shopId) {
  try {
    const res = await fetch(`${BASE_URL}/${shopId}`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function create(shopFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(shopFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function update(shopFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${shopFormData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(shopFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteShop(shopId) {
  try {
    const res = await fetch(`${BASE_URL}/${shopId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function createReview(shopId, reviewFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${shopId}/reviews`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const updateReview = async (shopId, reviewId, reviewFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${shopId}/reviews/${reviewId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteReview = async (shopId, reviewId) => {
  try {
    const res = await fetch(`${BASE_URL}/${shopId}/reviews/${reviewId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  show,
  create,
  update,
  deleteShop,
  createReview,
  updateReview,
  deleteReview
}