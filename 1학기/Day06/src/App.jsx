import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import UseEffect1 from "./pages/UseEffect/index.jsx"
import Home from './pages/home/index.jsx'
import About from './pages/about/index.jsx'
import UseEffect2 from './pages/useEffect2/index.jsx'
import RouterTest from './pages/RouterTest/index.jsx'
import Contact from './pages/contact/index.jsx'
import NoPage from './pages/nopage/index.jsx'
import Blogs from './pages/blog/index.jsx'

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
