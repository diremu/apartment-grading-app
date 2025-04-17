import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import SignupOwner from './components/signupOwner'
import SignupCustomer from './components/signupCustomer'
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/owner" element={<SignupOwner />} />
      <Route path="/signup/customer" element={<SignupCustomer />} />
    </Routes>
  )
}

export default App
