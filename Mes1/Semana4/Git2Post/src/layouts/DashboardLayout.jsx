import React from 'react'
import Dashboard from '../pages/Dashboard'
import { Outlet } from 'react-router'
import Sidebar from '../components/dashboard/Sidebar'

function DashboardLayout() {
  return (
    <div>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default DashboardLayout