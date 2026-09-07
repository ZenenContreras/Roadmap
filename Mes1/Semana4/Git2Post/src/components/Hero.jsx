import React from 'react'
import { useContext } from 'react'
import {UserContext} from '../context/Git2PostContext'

function Hero() {
    const {user, setUser} = useContext(UserContext)

  return (
    <section>
        <h1>Turn your GitHub activity into content.</h1>
        <p>Transform your commits, repositories and development activity into professional content </p>
        <button onClick={() => setUser('Zenen')}>Connect Github</button>
        <h1>{user}</h1>
    </section>
  )
}

export default Hero