import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';
import Landing from '../pages/Landing';
import Dashboard from '../pages/Dashboard';
import DashboardLayout from '../layouts/DashboardLayout';
import NotFound from '../pages/NotFound';
import Repositories from '../pages/Repositories';
import RepositoryDetails from '../pages/RepositoryDetails';
import Posts from '../pages/Posts';
import Settings from '../pages/Settings';


function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Landing />} />

            <Route path='/dashboard' element={<DashboardLayout/>}>
                <Route index element={<Dashboard />} />
                <Route path='repositories' element={<Repositories />} />
                <Route path='repositories/:id' element={<RepositoryDetails />} />
                <Route path='posts' element={<Posts />} />
                <Route path='settings' element={<Settings />} />
            </Route>

            <Route path='*' element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter