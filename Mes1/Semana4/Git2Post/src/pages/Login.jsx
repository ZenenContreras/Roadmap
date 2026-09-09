import React from 'react'
import { useNavigate } from 'react-router'
import UseGit2Post from '../hooks/UseGit2Post'

function Login() {
    const navigate = useNavigate()
    const {state, dispatch} = UseGit2Post()

    function handleLogin(){
        
        dispatch({type: 'SET_USER', payload: {name: 'zenen', github: 'zenencontreras'}})
        navigate('/dashboard')
    }

    return (
        <div><button onClick={handleLogin}>Continue With Github</button></div>
    )
}

export default Login