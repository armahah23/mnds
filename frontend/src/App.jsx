import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Registration from './components/Registration'
import Login from './components/Login'
import PublisherHome from './pages/PublisherHome'
import NewPost from './components/NewPost'


function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path='/publisher'>
          <Route path='home' element={<PublisherHome />} />
          <Route path='newpost' element={<NewPost />} />
          {/* Add other publisher-related routes here */}
        </Route>
      </Routes>
    </>
  )
}

export default App
