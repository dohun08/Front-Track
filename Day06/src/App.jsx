import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import UseEffect1 from "./pages/UseEffect"
import Home from './pages/home'
import About from './pages/about'
import UseEffect2 from './pages/useEffect2'
import RouterTest from './pages/RouterTest'
import Contact from './pages/contact'
import NoPage from './pages/nopage'
import Blogs from './pages/blog'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RouterTest />} />
      <Route path='/useEffect1' element={<UseEffect1 />} />
      <Route path='/home' element={<Home></Home>} />
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/useEffect2' element={<UseEffect2 />}/>
      <Route path="*" element={<NoPage />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
