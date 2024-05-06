import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home'
import About from './pages/About'
import DetailPage from './components/DetailPage'
import AllRepos from './pages/AllRepos'
// import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/detailpages' element={<DetailPage/>}/>
      <Route path='/repos' element={<AllRepos/>}/>
    </Routes>
    {/* <Toaster/> */}

    </BrowserRouter>
  )
}

export default App