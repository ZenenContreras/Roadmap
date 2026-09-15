import { Outlet } from 'react-router'
import Sidebar from '../components/dashboard/Sidebar'

function DashboardLayout() {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-175 flex-col gap-10 px-5 pt-8 sm:px-8 md:max-w-201 md:pt-14">
      <Sidebar />
      <main className="flex flex-1 flex-col pb-16">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout
