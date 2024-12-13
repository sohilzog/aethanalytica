import { useState } from 'react'
import './bootstrap.min.css'
import {Routes,Route} from 'react-router-dom'
import './App.css'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './components/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Detail from './components/Detail'
import Add from './components/Add'
import About from './components/About'
import Edit from './components/Edit'
import Contact from './components/Contact'
// import AllData from './components/AllData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
     <Route path="/reg" element={<Register />} />

      <Route path="/add" element={<Add />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      {/* <Route path="/all" element={<AllData/>}/> */}



      
      




    </Routes>
    <ToastContainer />
     
    </>
  )
}

export default App
