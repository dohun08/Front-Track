import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Promise from './Promise.jsx'
import AsyncAwait from "./AsyncAwait.jsx"
import AxiosTest from './axios.jsx'
import AxiosTest2 from './axiosTest.jsx';
import DataTest from './dataTest.jsx'

createRoot(document.getElementById('root')).render(
  <>

{/* <App /> */}
    {/* <Promise /> */}
    {/* <AsyncAwait /> */}
    {/* <AxiosTest /> */}
    <AxiosTest2 />
    <DataTest />
  </>
)
