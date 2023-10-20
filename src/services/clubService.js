import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/clubs`

async function index() {
  try {
    const res = await fetch(BASE_URL)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function create(clubFormData) {
  try {
    clubFormData.location = clubFormData.location.charAt(0).toUpperCase() + clubFormData.location.toLowerCase().slice(1)
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(clubFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(clubId) {
  try {
    const res = await fetch(`${BASE_URL}/${clubId}`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteClub(clubId) {
  try {
    const res = await fetch(`${BASE_URL}/${clubId}`, {
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

async function update(clubFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${clubFormData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(clubFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  create,
  show,
  deleteClub,
  update
}

