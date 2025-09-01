import React from 'react'
import Header from '../components/layout/Header'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'

const Layout = () => {
  return (
    <div>
        <Header />
        <NavBar />
        <Outlet/>
        <Footer />
    </div>
  )
}

export default Layout
