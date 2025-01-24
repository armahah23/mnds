import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Registration from './components/Registration'
import Login from './components/Login'
import PublisherHome from './pages/PublisherHome'
import NewPost from './components/NewPost'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import About from './pages/About'
import WelcomePage from './pages/WelcomePage'


function App() {
  

  return (
    <>
      <AuthProvider>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path='/publisher/*' element={<PublisherHome />} />
          <Route path='/about' element={<About />} />
          <Route path='/publisher/newfeed' element={<NewPost />} />
        </Route>
      </Routes>
    </AuthProvider>
    </>
  )
}

export default App
