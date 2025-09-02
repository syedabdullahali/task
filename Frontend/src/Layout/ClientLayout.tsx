import React from 'react'
import Header from '../components/layout/ClientLayout/Header'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/layout/ClientLayout/NavBar'
import Footer from '../components/layout/ClientLayout/Footer'

const ClientLayout = () => {
  return (
    <div>
        <Header />
        <NavBar />
        <Outlet/>
        <Footer />
    </div>
  )
}

export default ClientLayout
