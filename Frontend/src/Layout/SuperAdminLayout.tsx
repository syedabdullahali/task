import { Outlet } from 'react-router-dom'
import Header from '../components/layout/SuperAdminLayout/Header'
import Sidebar from '../components/layout/SuperAdminLayout/SideBar'

const SuperAdminLayout = () => {
  return (
    <main className='h-full min-h-screen'>
        <Header/>
        <div className='h-full  flex'>
            <Sidebar/>
            <div className="flex-1 overflow-y-auto p-4 bg-gray-100 lg:p-6">
             <Outlet/>
            </div>
        </div>
    </main>
  )
}

export default SuperAdminLayout
