import React from 'react'
import { Outlet, useNavigate } from 'react-router'
import UseGit2Post from '../hooks/UseGit2Post'

function ProtectedRoute() {
    const navigate = useNavigate()
    const {state, dispatch} = UseGit2Post()


    return state.user ? <Outlet /> : navigate('/login')
}

export default ProtectedRoute