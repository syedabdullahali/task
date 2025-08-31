import Header from '../Component/Layout/Header'
import { Outlet } from 'react-router-dom'
import SideBar from '../Component/Layout/SideBar'

const SuperAdminLayout = () => {
  return (
    <main className='h-full min-h-screen'>
        <Header/>
        <div className='h-full  flex'>
            <SideBar/>
            <div className="flex-1 overflow-y-auto p-4 bg-gray-100 lg:p-6">
             <Outlet/>
            </div>
        </div>
    </main>
  )
}

export default SuperAdminLayout
