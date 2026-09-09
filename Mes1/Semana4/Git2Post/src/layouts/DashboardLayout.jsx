import React from 'react'
import Dashboard from '../pages/Dashboard'
import { Outlet } from 'react-router'

function DashboardLayout() {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default DashboardLayout