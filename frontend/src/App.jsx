import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Registration from './components/Registration'
import Login from './components/Login'


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
