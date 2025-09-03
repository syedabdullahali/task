import Header from '../components/layout/ClientLayout/Header'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/layout/ClientLayout/NavBar'
import Footer from '../components/layout/ClientLayout/Footer'
import { Toaster } from 'react-hot-toast'

const ClientLayout = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Outlet />
      <Footer />
      <Toaster />

    </div>
  )
}

export default ClientLayout
