// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import AllCoffeeShops from './components/AllCoffeeShops/AllCoffeeShops'
import AllClubs from './components/AllClubs/AllClubs'
import NewClub from './components/NewClub/NewClub'
import ClubDetails from './components/ClubDetails/ClubDetails'
import CoffeeShopDetails from './components/CoffeeShopDetails/CoffeeShopDetails'
import EditClub from './components/EditClub/EditClub'
import EditCoffeeShop from './components/EditCoffeeShop/EditCoffeeShop'
import EditReview from './components/EditReview/EditReview'

// services
import * as authService from './services/authService'
import * as clubService from './services/clubService'
import * as shopService from './services/shopService'

// styles
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'


function App() {
  const [clubs, setClubs] = useState([])
  const [user, setUser] = useState(authService.getUser())
  const [shops, setShops] = useState([])
  const [clubSearchResults, setClubSearchResults] = useState([])
  const [shopSearchResults, setShopSearchResults] = useState([])

  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = () => {
    setUser(authService.getUser())
  }

  const handleAddClub = async clubFormData => {
    const newClub = await clubService.create(clubFormData)
    setClubs([newClub, ...clubs])
    setClubSearchResults([newClub, ...clubSearchResults])
    navigate('/new')
  }

  const handleAddShop = async shopFormData => {
    const newShop = await shopService.create(shopFormData)
    setShops([newShop, ...shops])
    setShopSearchResults([newShop, ...shopSearchResults])
    navigate('/new')
  }

  const handleDeleteClub = async (clubId) => {
    const deletedClub = await clubService.deleteClub(clubId)
    setClubs(clubs.filter(club => club._id !== deletedClub._id))
    setClubSearchResults(clubSearchResults.filter(club => club._id !== deletedClub._id))
    navigate('/clubs')
  }

  const handleDeleteShop = async (shopId) => {
    const deletedShop = await shopService.deleteShop(shopId)
    setShops(shops.filter(shop => shop._id !== deletedShop._id))
    setShopSearchResults(shopSearchResults.filter(shop => shop._id !== deletedShop._id))
    navigate('/shops')
  }

  const handleUpdateClub = async clubFormData => {
    const updatedClub = await clubService.update(clubFormData)
    setClubs(clubs.map((club) => clubFormData._id === club._id ? updatedClub : club))
    navigate('/clubs')
  }

  const handleUpdateCoffeeShop = async shopFormData => {
    const updatedShop = await shopService.update(shopFormData)
    setShops(shops.map((shop) => shopFormData._id === shop._id ? updatedShop : shop))
    navigate('/shops')
  }

  const handleClubSearch = formData => {
    const filteredClubResults = clubs.filter(club => (
      club.name.toLowerCase().includes(formData.query.toLowerCase()) ||
      club.category.toLowerCase().includes(formData.query.toLowerCase())
    ))
    setClubSearchResults(filteredClubResults)
  }

  const handleShopSearch = formData => {
    const filteredShopResults = shops.filter(shop => (
      shop.location.toLowerCase().includes(formData.query.toLowerCase()) ||
      shop.name.toLowerCase().includes(formData.query.toLowerCase())
    ))
    setShopSearchResults(filteredShopResults)
  }

  useEffect(() => {
    const fetchAllClubs = async () => {
      const data = await clubService.index()
      setClubs(data)
      setClubSearchResults(data)
    }
    fetchAllClubs()
  }, [])


  useEffect(() => {
    const fetchAllShops = async () => {
      const data = await shopService.index()
      setShops(data)
      setShopSearchResults(data)
    }
    fetchAllShops()
  }, [])


  return (
    <main>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/clubs"
          element={<AllClubs
            clubs={clubs}
            handleDeleteClub={handleDeleteClub}
            user={user}
            handleClubSearch={handleClubSearch}
            clubSearchResults={clubSearchResults}
          />}
        />
        <Route
          path="/shops"
          element={
            <AllCoffeeShops
              shops={shops}
              handleDeleteShop={handleDeleteShop}
              user={user}
              handleShopSearch={handleShopSearch}
              shopSearchResults={shopSearchResults}
            />}
        />
        <Route
          path="/new"
          element={
            <ProtectedRoute user={user}>
              <NewClub
                handleAddClub={handleAddClub}
                handleAddShop={handleAddShop}
                shops={shops}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/clubs/:clubId"
          element={<ClubDetails user={user} />}
        />
        <Route
          path="/shops/:shopId"
          element={<CoffeeShopDetails user={user} handleDeleteShop={handleDeleteShop} />}
        />
        <Route
          path="/auth/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/auth/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/clubs/:clubId/editclub"
          element={
            <ProtectedRoute user={user}>
              <EditClub handleUpdateClub={handleUpdateClub} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shops/:shopId/editshop"
          element={
            <ProtectedRoute user={user}>
              <EditCoffeeShop handleUpdateCoffeeShop={handleUpdateCoffeeShop} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shops/:shopId/reviews/:reviewId"
          element={
            <ProtectedRoute user={user}>
              <EditReview />
            </ProtectedRoute>
          }
        />
      </Routes>
    </main>
  )
}

export default App