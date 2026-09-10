import { Navigate, Outlet } from 'react-router'
import UseGit2Post from '../hooks/UseGit2Post'

export default function ProtectedRoutes() {
  const { state } = UseGit2Post()

  if (!state.user) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}