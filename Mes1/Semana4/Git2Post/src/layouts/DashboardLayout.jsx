import React from 'react'
import Dashboard from '../pages/Dashboard'
import { Outlet } from 'react-router'
import Sidebar from '../components/dashboard/Sidebar'

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto w-full max-w-5xl px-6 flex flex-col items-center">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout