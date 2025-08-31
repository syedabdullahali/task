import React from 'react'
import Header from '../components/layout/Header'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/layout/NavBar'

const Layout = () => {
  return (
    <div>
        <Header />
        <NavBar />
        <Outlet/>
    </div>
  )
}

export default Layout
