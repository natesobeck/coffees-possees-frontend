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

// services
import * as authService from './services/authService'
import * as clubService from './services/clubService'
import * as shopService from './services/shopService'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [clubs, setClubs] = useState([])
  const [shops, setShops] = useState([])
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
    navigate('/new')
  }

  const handleAddShop = async shopFormData => {
    const newShop = await shopService.create(shopFormData)
    setShops([newShop, ...shops])
    navigate('/new')
  }

  const handleDeleteClub = async (clubId) => {
    const deletedClub = await clubService.deleteClub(clubId)
    setClubs(clubs.filter(club => club._id !== deletedClub._id))
    navigate('/clubs')
  }

  const handleDeleteShop = async (shopId) => {
    const deletedShop = await shopService.deleteShop(shopId)
    setClubs(shops.filter(shop => shop._id !== deletedShop._id))
    navigate('/shops')
  }

  useEffect(() => {
    const fetchAllClubs = async () => {
      const data = await clubService.index()
      setClubs(data)
    }
    fetchAllClubs()
  }, [])

  useEffect(() => {
    const fetchAllShops = async () => {
      const data = await shopService.index()
      setShops(data)
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
          element={ <AllClubs clubs={clubs} handleDeleteClub={handleDeleteClub}/> }
        />
        <Route
          path="/shops"
          element={ <AllCoffeeShops shops={shops} handleDeleteShop={handleDeleteShop}/> }
        />
        <Route
          path="/new"
          element={
            <ProtectedRoute user={user}>
              <NewClub handleAddClub={handleAddClub} handleAddShop={handleAddShop}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/clubs/:clubId"
          element={ <ClubDetails user={user}/> }
        />
        <Route
          path="/coffeeshops/:shopId"
          element={ <CoffeeShopDetails user={user}/> }
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
      </Routes>
    </main>
  )
}

export default App
